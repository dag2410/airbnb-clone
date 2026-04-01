import { createSlice } from "@reduxjs/toolkit";

import {
  getCurrentUser,
  postLogIn,
  postLogOut,
  postRegister,
  refreshToken,
  resetPassword,
  sendForgotPasswordEmail,
  verifyEmail,
  verifyResetToken,
} from "./authAsync";

const initialState = {
  currentUser: null,
  isLoading: false,
  isLoggerIn: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isLoggerIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get current user
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.currentUser = null;
        state.isLoggerIn = false;
      })

      // Register new user
      .addCase(postRegister.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRegister.fulfilled, (state, action) => {
        state.currentUser = null;
        state.isLoggerIn = false;
        state.isLoading = false;
      })
      .addCase(postRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Log out
      .addCase(postLogOut.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postLogOut.fulfilled, (state) => {
        state.currentUser = null;
        state.isLoggerIn = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postLogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Log in
      .addCase(postLogIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postLogIn.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postLogIn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      .addCase(refreshToken.pending, (state) => {
        // Không set loading = true để tránh flickering
        state.error = null;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.currentUser = action.payload;
        state.isLoggerIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(refreshToken.rejected, (state, action) => {
        state.isLoading = false;
        state.currentUser = null;
        state.isLoggerIn = false;
        state.error = action.error?.message || "Token hết hạn";
      })

      .addCase(sendForgotPasswordEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(sendForgotPasswordEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message =
          action.payload?.message || "Email đã được gửi nếu tồn tại.";
      })
      .addCase(sendForgotPasswordEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Lỗi khi gửi email";
      })

      // Verify reset token
      .addCase(verifyResetToken.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyResetToken.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(verifyResetToken.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Token không hợp lệ";
      })

      // Reset password
      .addCase(resetPassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message =
          action.payload?.message || "Đặt lại mật khẩu thành công.";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Lỗi khi đặt lại mật khẩu";
      })

      // Verify email
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.message = null;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload?.message || "Xác thực email thành công.";
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error?.message || "Lỗi khi xác thực email";
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
