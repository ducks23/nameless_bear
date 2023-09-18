"use client";
import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Divider,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import { useDisclosure } from "@chakra-ui/react";
export default function MobileNav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const p = "p-6 font-bold";

  return (
    <div className="flex justify-between">
      <Button
        className="my-auto"
        ref={btnRef}
        colorScheme="blue"
        onClick={onOpen}
      >
        Menu
      </Button>
      <div className={` flex cursor-pointer ${p}`}>
        {" "}
        <Link className="flex" href={"/"}>
          <Image src={"/faucet.png"} width={"30"} height={"30"} />
          <div className="ml-3">Edified Landscaping</div>{" "}
        </Link>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color="blue.500">
          <DrawerCloseButton />
          <DrawerHeader>Edified Landscaping</DrawerHeader>

          <DrawerBody>
            <Link href={"/"} onClick={onClose}>
              {" "}
              <div className={`${p}`}>Home</div>{" "}
            </Link>
            <Divider />
            <Link href={"/about"} onClick={onClose}>
              <div className={`${p}`}>About</div>
            </Link>{" "}
            <Divider />
            <div className={`${p}`}>services</div>
            <Divider />
            <Link href={"/contact"}>
              <div className={`${p}`} onClick={onClose}>
                Contact
              </div>
            </Link>{" "}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
