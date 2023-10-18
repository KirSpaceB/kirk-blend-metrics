import { SettingMachineContext } from "@/machines";
import { SettingsPreview } from "./previews";

export const BasicSettingsPreview = () => {
  const settings = SettingMachineContext.useSelector(
    (state) => state.context.basicSettings
  );

  return (
    <div className="space-y-6">
      {settings.map((setting) => (
        <SettingsPreview setting={setting} key={setting.id} />
      ))}
    </div>
  );
};
