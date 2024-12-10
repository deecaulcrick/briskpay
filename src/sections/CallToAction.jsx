function CallToAction() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="brisk-container flex flex-col items-center">
        <div className="max-w-[540px]">
          <div className="text-[#68A4E2] text-center">
            Unlock the Future of Payments
          </div>
          <h2 className="section-heading text-center text-white">
            Start Sending Money, Saving Smart, and{" "}
            <span className="text-[#6C6C6C]">
              Taking Control of Your Finances.
            </span>
          </h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-[30px] font-regular inline-flex justify-center items-center tracking-tight mt-5">
              Learn more
            </button>
            <button className="bg-transparent text-white border px-4 py-2 rounded-[30px] font-regular inline-flex justify-center items-center tracking-tight mt-5">
              Get the app
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
