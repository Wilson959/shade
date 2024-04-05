import Script from "next/script";

export default function () {
  return (
    <>
      <footer class="text-base-content ">
    <div class="footer footer-center p-10 bg-base-200">

        <nav class="grid grid-flow-col gap-6">
            <a class="btn btn-ghost btn-sm btn-circle">
                <i class="fa-brands fa-github text-2xl"></i>
            </a>
            <a class="btn btn-ghost btn-sm btn-circle">
                <i class="fa-brands fa-twitter text-2xl"></i>
            </a>
            <a class="btn btn-ghost btn-sm btn-circle">
                <i class="fa-brands fa-facebook text-2xl"></i>
            </a>
            <a class="btn btn-ghost btn-sm btn-circle">
                <i class="fa-brands fa-youtube text-2xl"></i>
            </a>
        </nav>

        <nav>
            <div class="flex flex-wrap justify-center gap-y-2 gap-x-6 text-lg">
                <a class="link link-hover">Contact us</a>
                <a class="link link-hover">Services</a>
                <a class="link link-hover">Privacy Policy</a>
                <a class="link link-hover">Terms & Conditions</a>
                <a class="link link-hover">Career</a>
            </div>
        </nav>
    </div>

    <aside class="bg-base-300 py-4 px-8 w-full flex gap-2 flex-wrap justify-between items-center text-sm">
        <p class="text-xl flex items-center gap-2">
            <img alt="Logo" src="/logo.svg" class="w-4" />
            <span>Shade</span>
        </p>
        <p>Copyright © Shade 2024 - All rights reserved</p>
    </aside>
</footer>
    </>
  );
}
