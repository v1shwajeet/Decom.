"use client"

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";

const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={(v)=>{ if(!v) setIsOpen(false); }}>
        <DialogTrigger onClick={()=>setIsOpen(true)} asChild>
            <Button>Upload PDF</Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Title Goes Here</DialogTitle>
            </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default UploadButton
