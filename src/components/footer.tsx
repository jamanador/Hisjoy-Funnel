export function Footer() {
  return (
    <footer className="full-width grid-containerxl items-center bg-[#EEF7FF] py-10">
      <div className="flex flex-wrap items-center justify-center gap-10 font-semibold text-[#0d3c15e9] md:gap-20">
        <div className="flex items-center gap-x-4 ">
          <img className="size-12 text-[#0d3c15e9]" src="/icons/icon-footer-1.svg" alt="" />
          <div className="grid">
            <span>Up to 40% savings</span>
            <span>on all subscriptions</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img className="size-12 text-[#0d3c15e9]" src="/icons/icon-footer-2.svg" alt="" />
          <div className="grid">
            <span>Free shipping</span>
            <span>on orders over $50</span>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <img className="size-12 text-[#0d3c15e9]" src="/icons/icon-footer-3.svg" alt="" />
          <div className="grid">
            <span>90-day money</span>
            <span>back guarantee</span>
          </div>
        </div>
      </div>
      <div className="grid justify-items-center gap-y-8 ">
        <div className="space-y-2 pt-14">
          <h3 className="text-3xl font-bold text-[#0d3c15e9]">Contact</h3>
          <div className="flex items-center gap-x-3 text-sm text-[#0d3c15e9]">
            <img className="size-8 text-[#0d3c15e9] " src="/icons/icon-footer-4.svg" alt="" />
            <a href="tel:(844) -640-0728 " className="font-bold">1-888-206-2137</a>
          </div>
          <div className="flex items-center gap-x-3 text-sm text-[#0d3c15e9] font-bold">
            <img className="size-8 " src="/icons/icon-footer-5.svg" alt="" />
            <a href="mailto:support@myecohealth.com">support@myecohealth.com</a>
          </div>
        </div>
        <p className="max-w-[65ch] leading-relaxed text-[#a5a5a5] italic">
          *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Caution: If you are pregnant, nursing, or taking medications, consult your physician before use. Keep out of reach of children
        </p>
        <span className="text-[#a5a5a5] mb-7 md:mb-1 italic">
          © {new Date().getFullYear()} ECO HEALTH. All Rights Reserved

        </span>
      </div>
    </footer>
  );
}
