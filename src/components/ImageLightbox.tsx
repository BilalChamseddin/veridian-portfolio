import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageLightboxProps {
  imageUrl: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageLightbox({ imageUrl, alt, isOpen, onClose }: ImageLightboxProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background/95 backdrop-blur-md border-none">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-3 right-3 z-50 bg-background/80 hover:bg-background rounded-full"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Full Image */}
        <div className="flex items-center justify-center p-4">
          <img
            src={imageUrl}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ImageWithLightboxProps {
  src: string;
  alt: string;
  className?: string;
  buttonClassName?: string;
}

export function ImageWithLightbox({ src, alt, className, buttonClassName }: ImageWithLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative group">
        <img src={src} alt={alt} className={className} />
        <Button
          variant="secondary"
          size="sm"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          className={`absolute bottom-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity ${buttonClassName}`}
        >
          <ZoomIn className="h-4 w-4 mr-1" />
          View Full
        </Button>
      </div>
      <ImageLightbox
        imageUrl={src}
        alt={alt}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
