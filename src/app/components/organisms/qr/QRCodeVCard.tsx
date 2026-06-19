import { QRCodeSVG } from 'qrcode.react';
import LogoDc from '../../../../imports/LogoDc';

export function QRCodeVCard() {
  // Create vCard string with Dennis Cornelissen's contact information
  // Using simpler format for cleaner QR code
  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Dennis Cornelissen
N:Cornelissen;Dennis;;;
ORG:DC Vloeren & Interieur
TEL:+31631232174
EMAIL:info@dcvloeren.nl
URL:https://dcvloeren.nl
URL;TYPE=instagram:https://instagram.com/dcvloeren/
END:VCARD`;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* QR Code with high error correction to accommodate logo */}
      <QRCodeSVG
        value={vCardData}
        size={392} // Size to fill the container (440 - 24*2 padding)
        level="H" // High error correction (~30%) allows for logo overlay
        includeMargin={false}
        fgColor="#141311" // Dark color matching the design
        bgColor="transparent"
      />
      
      {/* DC Logo overlay in center - approximately 15% of QR size */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f0f0f0] p-2"
        style={{
          width: '64px',
          height: '64px',
        }}
      >
        <LogoDc />
      </div>
    </div>
  );
}