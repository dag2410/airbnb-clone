import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

function AmenitiesRules({ amenities, houseRules, setFormData }) {
  const amenitiesOptions = [
    "Wifi",
    "Kitchen",
    "Washer",
    "Heating",
    "TV",
    "Coffee maker",
    "Smoke alarm",
    "Air conditioning",
    "Parking",
    "Pool",
  ];

  const houseRulesOptions = [
    "No smoking",
    "No pets",
    "No parties or events",
    "Check-in after 3:00 PM",
    "Check-out before 11:00 AM",
  ];

  const handleHouseRuleToggle = (rule) => {
    setFormData((prev) => ({
      ...prev,
      houseRules: prev.houseRules.includes(rule)
        ? prev.houseRules.filter((r) => r !== rule)
        : [...prev.houseRules, rule],
    }));
  };
  const handleAmenityToggle = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold mb-3">Tiện nghi</h3>
        <div className="grid grid-cols-2 gap-3">
          {amenitiesOptions.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={amenities.includes(amenity)}
                onCheckedChange={() => handleAmenityToggle(amenity)}
              />
              <Label htmlFor={amenity} className="cursor-pointer">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-semibold mb-3">Quy tắc nhà</h3>
        <div className="grid grid-cols-1 gap-3">
          {houseRulesOptions.map((rule) => (
            <div key={rule} className="flex items-center space-x-2">
              <Checkbox
                id={rule}
                checked={houseRules.includes(rule)}
                onCheckedChange={() => handleHouseRuleToggle(rule)}
              />
              <Label htmlFor={rule} className="cursor-pointer">
                {rule}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AmenitiesRules;
