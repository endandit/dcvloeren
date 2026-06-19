import imgIconContact from "figma:asset/821a4e555d93f3232c1c618f2f1e34aea81a801c.png";
import { ContactForm } from "../organisms/forms/ContactForm";
import { QrCode } from "../organisms/qr/QrCode";
import { ContactFooter } from "../organisms/footer/ContactFooter";

export function ContactSection({ scrollProgress }: { scrollProgress?: number } = {}) {
  return (
    <div 
      className="absolute bottom-[-204px] max-[441px]:bottom-[164px] content-stretch flex flex-col gap-[48px] items-center max-[441px]:gap-[24px] max-[441px]:pb-[24px] pb-[48px] pt-[24px] left-1/2 translate-x-[-50%] w-[440px]"
      data-name="wrapper/contact"
    >
      <div id="icon-contact" className="relative shrink-0 size-[80px]" data-name="icon/contact">
        <img loading="lazy" alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgIconContact} />
      </div>
      <ContactForm />
      <QrCode />
      <ContactFooter />
    </div>
  );
}