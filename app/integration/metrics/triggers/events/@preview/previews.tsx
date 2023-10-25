import { Setting } from "@/machines";
import { SearchFieldPreview } from "@/components/search-field-preview";
import { DropdownPreview } from "@/components/dropdown-preview";
import { TogglePreview } from "@/components/toggle-preview";
import { ShortTextPreview } from "@/components/short-text-preview";
import { LongTextPreview } from "@/components/long-text-preview";
import { PasswordPreview } from "@/components/password-preview";
import { EmailPreview } from "@/components/email-preview";
import { NumbersPreview } from "@/components/numbers-preview";
import { WebsitePreview } from "@/components/website-preview";
import { AddressPreview } from "@/components/address-preview";
import { PhoneNumberPreview } from "@/components/phone-number-preview";
import { RadioGroupPreview } from "@/components/radio-group-preview";
import { CheckboxPreview } from "@/components/checkbox-preview";
import { VideoPreview } from "@/components/video-preview";
import { FileUploadPreview } from "@/components/file-upload-preview";
import { ImageUploadPreview } from "@/components/image-upload-preview";
import { RichTextPreview } from "@/components/rich-text-preview";

export const SettingsPreview = ({ setting }: { setting: Setting }) => {
  return (
    <>
      {setting.kind === "search" && <SearchFieldPreview {...setting} />}
      {setting.kind === "dropdown" && <DropdownPreview {...setting} />}
      {setting.kind === "toggle" && <TogglePreview {...setting} />}
      {setting.kind === "short-text" && <ShortTextPreview {...setting} />}
      {setting.kind === "long-text" && <LongTextPreview {...setting} />}
      {setting.kind === "password" && <PasswordPreview {...setting} />}
      {setting.kind === "email" && <EmailPreview {...setting} />}
      {setting.kind === "numbers" && <NumbersPreview {...setting} />}
      {setting.kind === "website" && <WebsitePreview {...setting} />}
      {setting.kind === "address" && <AddressPreview {...setting} />}
      {setting.kind === "phone-number" && <PhoneNumberPreview {...setting} />}
      {setting.kind === "radio-group" && <RadioGroupPreview {...setting} />}
      {setting.kind === "checkbox" && <CheckboxPreview {...setting} />}
      {setting.kind === "video" && <VideoPreview {...setting} />}
      {setting.kind === "video" && <VideoPreview {...setting} />}
      {setting.kind === "file-upload" && <FileUploadPreview {...setting} />}
      {setting.kind === "image-upload" && <ImageUploadPreview {...setting} />}
      {setting.kind === "rich-text" && <RichTextPreview {...setting} />}
    </>
  );
};
