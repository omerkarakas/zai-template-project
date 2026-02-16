'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ContactForm } from './ContactForm';

export interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName?: string;
  title?: string;
}

export function ContactModal({
  open,
  onOpenChange,
  serviceName,
  title = 'İletişim Formu',
}: ContactModalProps) {
  // Handle form success - auto-close modal after 3 seconds
  const handleSuccess = React.useCallback(() => {
    setTimeout(() => {
      onOpenChange(false);
    }, 3000);
  }, [onOpenChange]);

  // Handle form error - errors are displayed inside the form
  const handleError = React.useCallback((_error: string) => {
    // Error state is managed internally by ContactForm
    // This callback is provided for parent components if needed
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogContent className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] border bg-white dark:bg-gray-900 p-4 sm:p-6 shadow-lg duration-200 max-h-[90vh] overflow-y-auto data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg">
          {/* Header with title and close button */}
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">{title}</DialogTitle>
            <DialogPrimitive.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onOpenChange(false)}
                className="h-8 w-8"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Kapat</span>
              </Button>
            </DialogPrimitive.Close>
          </div>

          {/* ContactForm - manages its own loading, success, and error states */}
          <div className="mt-4">
            <ContactForm
              serviceName={serviceName}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
