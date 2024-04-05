import React from "react";

export default function ModalItemButton({isOpen}) {
  if (!isOpen) return null;
  
  return (
    <>
      <h1>This is a test</h1>
    </>
  );
}


