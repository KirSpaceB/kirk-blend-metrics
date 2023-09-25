import { IAvatarItem } from "./share-window";
import { AvatarFallback, AvatarImage } from "./avatar";

interface DropdownProps {
  avatars: IAvatarItem[];
}

export default function AvatarDropdown({ avatars }: DropdownProps) {
  return (
    <div
      id="_Input dropdown menu"
      // We need to make the position more dynamic
      className="absolute bottom-[-105px] flex items-start rounded-lg border border-gray-300 bg-white shadow-lg sm:left-[50px] sm:w-[570.45px] "
    >
      <ul
        id="Menu items"
        className="flex flex-shrink-0 flex-grow flex-col items-start py-1"
      >
        {avatars.map((avatarItem, index) => (
          <>
            <li
              id={`list-item-${index}`}
              className="flex items-center gap-2 self-stretch p-2.5 px-3.5"
              key={index}
            >
              <div className="inline-flex items-center gap-x-2.5">
                <avatarItem.image isOnline size="sm">
                  <AvatarImage alt="Man" src="/avatar_thomas.png" />
                  <AvatarFallback>Thomas</AvatarFallback>
                </avatarItem.image>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Thomas
                  </span>
                  <span className="text-xs leading-[18px] text-gray-500">
                    tranthuy.nute@gmail.com
                  </span>
                </div>
              </div>
            </li>
            <li
              id={`list-item-${index}`}
              className="flex items-center gap-2 self-stretch p-2.5 px-3.5"
              key={index}
            >
              <div className="inline-flex items-center gap-x-2.5">
                <avatarItem.image isOnline size="sm">
                  <AvatarImage alt="Tiffany" src="/avatar_tiffany.png" />
                  <AvatarFallback>Taylor</AvatarFallback>
                </avatarItem.image>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Tiffany
                  </span>
                  <span className="text-xs leading-[18px] text-gray-500">
                    tranthuy.nute@gmail.com
                  </span>
                </div>
              </div>
            </li>
            <li
              id={`list-item-${index}`}
              className="flex items-center gap-2 self-stretch p-2.5 px-3.5"
              key={index}
            >
              <div className="inline-flex items-center gap-x-2.5">
                <avatarItem.image isOnline size="sm">
                  <AvatarImage alt="Man" src="/avatar_taylor.png" />
                  <AvatarFallback>Taylor</AvatarFallback>
                </avatarItem.image>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Thomas
                  </span>
                  <span className="text-xs leading-[18px] text-gray-500">
                    tranthuy.nute@gmail.com
                  </span>
                </div>
              </div>
            </li>
            <li
              id={`list-item-${index}`}
              className="flex items-center gap-2 self-stretch p-2.5 px-3.5"
              key={index}
            >
              <div className="inline-flex items-center gap-x-2.5">
                <avatarItem.image isOnline size="sm">
                  <AvatarImage alt="Man" src="/avatar_tristan.png" />
                  <AvatarFallback>Tristan</AvatarFallback>
                </avatarItem.image>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Thomas
                  </span>
                  <span className="text-xs leading-[18px] text-gray-500">
                    tranthuy.nute@gmail.com
                  </span>
                </div>
              </div>
            </li>
            <li
              id={`list-item-${index}`}
              className="flex items-center gap-2 self-stretch p-2.5 px-3.5"
              key={index}
            >
              <div className="inline-flex items-center gap-x-2.5">
                <avatarItem.image isOnline size="sm">
                  <AvatarImage alt="Man" src="/avatar_teresa.png" />
                  <AvatarFallback>Teresa</AvatarFallback>
                </avatarItem.image>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-700">
                    Thomas
                  </span>
                  <span className="text-xs leading-[18px] text-gray-500">
                    tranthuy.nute@gmail.com
                  </span>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}
