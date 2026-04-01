import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

function LocationInfo({ setFormData, location }) {
  const [wards, setWards] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  // Load provinces
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/v1/p/")
      .then((res) => res.json())
      .then((data) => setProvinces(data))
      .catch((err) => console.error(err));
  }, []);

  // Load districts when province is selected
  useEffect(() => {
    if (selectedProvince) {
      fetch(
        `https://provinces.open-api.vn/api/v1/p/${selectedProvince}?depth=2`
      )
        .then((res) => res.json())
        .then((data) => {
          setDistricts(data.districts || []);
          setWards([]);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedProvince]);

  // Load wards when district is selected
  useEffect(() => {
    if (selectedDistrict) {
      fetch(
        `https://provinces.open-api.vn/api/v1/d/${selectedDistrict}?depth=2`
      )
        .then((res) => res.json())
        .then((data) => {
          setWards(data.wards || []);
        })
        .catch((err) => console.error(err));
    }
  }, [selectedDistrict]);

  const handleDistrictSelect = (value) => {
    const district = districts.find((d) => d.code.toString() === value);
    setSelectedDistrict(value);
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        district: district?.name || "",
      },
    }));
  };

  const handleWardSelect = (value) => {
    const ward = wards.find((w) => w.code.toString() === value);
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        ward: ward?.name || "",
      },
    }));
  };

  const handleProvinceSelect = (value) => {
    const province = provinces.find((p) => p.code.toString() === value);
    setSelectedProvince(value);
    setSelectedDistrict(null);
    setFormData((prev) => ({
      ...prev,
      location: {
        ...prev.location,
        city: province?.name || "",
        country: "Việt Nam",
      },
    }));
  };

  return (
    <div className="space-y-4">
      {/* Quốc gia */}
      <div>
        <Label className="mb-2 block">Quốc gia</Label>
        <Input disabled value="Việt Nam" className="h-10" />
      </div>

      {/* Thành phố */}
      <div>
        <Label className="mb-2 block">Tỉnh/Thành phố</Label>
        <Select onValueChange={handleProvinceSelect}>
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Chọn tỉnh/thành phố" />
          </SelectTrigger>
          <SelectContent>
            {provinces.map((p) => (
              <SelectItem key={p.code} value={p.code.toString()}>
                {p.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Quận/Huyện */}
      <div>
        <Label className="mb-2 block">Quận/Huyện</Label>
        <Select
          onValueChange={handleDistrictSelect}
          disabled={!selectedProvince}
        >
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Chọn quận/huyện" />
          </SelectTrigger>
          <SelectContent>
            {districts.map((d) => (
              <SelectItem key={d.code} value={d.code.toString()}>
                {d.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Phường/Xã */}
      <div>
        <Label className="mb-2 block">Phường/Xã</Label>
        <Select onValueChange={handleWardSelect} disabled={!selectedDistrict}>
          <SelectTrigger className="h-10">
            <SelectValue placeholder="Chọn phường/xã" />
          </SelectTrigger>
          <SelectContent>
            {wards.map((w) => (
              <SelectItem key={w.code} value={w.code.toString()}>
                {w.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label className="mb-2 block">Địa chỉ cụ thể</Label>
        <Input
          placeholder="Nhập địa chỉ chính xác (số nhà, đường...)"
          name="address_line"
          value={location?.address_line || ""}
          onChange={(e) => {
            setFormData((prev) => ({
              ...prev,
              location: { ...prev.location, address_line: e.target.value },
            }));
          }}
          className="h-10"
        />
      </div>
    </div>
  );
}

export default LocationInfo;
