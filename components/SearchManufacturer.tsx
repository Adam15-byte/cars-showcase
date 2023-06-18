"use client";

import React, {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useState,
  Fragment,
} from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { manufacturers } from "@/constants";

interface Props {
  manufacturer: string;
  setManufacturer: Dispatch<SetStateAction<string>>;
}

const SearchManufacturer: FC<Props> = ({ manufacturer, setManufacturer }) => {
  const [query, setQuery] = useState<string>("");
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replaceAll(" ", "")
            .includes(query.toLowerCase().replaceAll(" ", ""))
        );
  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            displayValue={(manufacturer: string) => manufacturer}
            onChange={(input: ChangeEvent<HTMLInputElement>) => {
              setQuery(input.target.value);
            }}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `${
                      active ? "bg-primary-blue text-white" : "text-gray-900"
                    } relative search-manufacturer__option`
                  }
                  value={item}
                >
                  {({ selected, active }) => {
                    return (
                      <>
                        <span
                          className={`block truncate${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            {item}
                          </span>
                        ) : null}
                      </>
                    );
                  }}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;
