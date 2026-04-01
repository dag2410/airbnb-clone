import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { FaBan, FaFlag } from "react-icons/fa";
import React, { useState } from "react";

function UserReport({ host }) {
  const [reportReason, setReportReason] = useState("");

  const handleReport = () => {
    console.log("Gửi báo cáo:", reportReason);
  };

  const handleBlock = () => {
    console.log("Đã chặn host:", host.name);
  };

  return (
    <div className="space-y-2">
      {/* Báo cáo */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-gray-100 transition-all duration-300 justify-start"
          >
            <FaFlag className="text-xl mr-2 text-red-500" />
            <span className="font-montserrat text-lg">Báo cáo {host.name}</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Báo cáo người dùng</DialogTitle>
            <DialogDescription>
              Hãy mô tả lý do bạn muốn báo cáo {host.name}.
            </DialogDescription>
          </DialogHeader>

          <Textarea
            value={reportReason}
            onChange={(e) => setReportReason(e.target.value)}
            placeholder="Nhập lý do báo cáo..."
            className="min-h-[100px] mt-3"
          />

          <DialogFooter>
            <Button
              onClick={handleReport}
              disabled={!reportReason.trim()}
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              Gửi báo cáo
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Chặn */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="hover:bg-gray-100 transition-all duration-300 justify-start"
          >
            <FaBan className="text-xl mr-2 text-gray-600" />
            <span className="font-montserrat text-lg">Chặn {host.name}</span>
          </Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Xác nhận chặn</DialogTitle>
            <DialogDescription>
              Bạn có chắc chắn muốn chặn {host.name}? Sau khi chặn, bạn sẽ không
              còn thấy hoặc nhận tin nhắn từ họ nữa.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              onClick={handleBlock}
              className="bg-black hover:bg-gray-800 text-white"
            >
              Xác nhận chặn
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserReport;
