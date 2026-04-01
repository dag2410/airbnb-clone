import { Eye, EyeOff, Lock } from "lucide-react";
import { Input } from "../ui/input";

export const PasswordField = ({
  label,
  name,
  register,
  error,
  showPassword,
  toggleShowPassword,
  isSubmitting,
  isToggle = true,
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={label}
          className={`p-6 pr-10 ${
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          }`}
          {...register(name)}
          disabled={isSubmitting}
        />

        {isToggle ? (
          <button
            type="button"
            onClick={toggleShowPassword}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300">
            <Lock size={18} />
          </div>
        )}
      </div>

      {error && (
        <span className="text-red-500 text-xs italic">{error.message}</span>
      )}
    </div>
  );
};
