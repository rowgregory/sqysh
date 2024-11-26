import React from "react";

export const metadata = {
  title: "Sqysh | Full-Stack Web Solutions",
  description:
    "Custom digital solutions for entrepreneurs and small businesses.",
  alternates: {
    canonical: "/terms-of-service",
  },
};

const TermsOfService = () => {
  return (
    <div className="mt-32 w-full max-w-screen-md">
      <h1 className="text-xl font-bold">Terms of Service</h1>
      <h5 className="text-xs text-slate-500 mb-6">Last Updated: 6/21/2024</h5>
      <p className="text-slate-200 mb-7">
        Welcome to <span className="font-Paytone-One">Sqysh</span>, a software
        development company. These Terms of Service govern your use of
        Sqysh&apos;s website and services. By accessing or using my services,
        you agree to these Terms of Service.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        1. Use of Services
      </h2>
      <p className="text-sm mb-8">
        You agree to use <span className="font-Paytone-One">Sqysh</span>&apos;s
        services only for lawful purposes and in accordance with these Terms of
        Service and any applicable laws and regulations.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        2. Intellectual Property
      </h2>
      <p className="text-sm mb-8">
        The content, design, logos, and all intellectual property rights
        associated with <span className="font-Paytone-One">Sqysh</span> remain
        the property of <span className="font-Paytone-One">Sqysh</span>. You may
        not use, modify, reproduce, or distribute any content from{" "}
        <span className="font-Paytone-One">Sqysh</span> without prior written
        consent.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        3. Limitation of Liability
      </h2>
      <p className="text-sm mb-8">
        <span className="font-Paytone-One">Sqysh</span> shall not be liable for
        any indirect, incidental, special, consequential, or punitive damages,
        or any loss of profits or revenues, whether incurred directly or
        indirectly, arising from your use of or inability to use{" "}
        <span className="font-Paytone-One">Sqysh</span>&apos;s services.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        4. Modifications
      </h2>
      <p className="text-sm mb-8">
        <span className="font-Paytone-One">Sqysh</span> reserves the right to
        modify these Terms of Service at any time. Changes will be effective
        immediately upon posting. Your continued use of{" "}
        <span className="font-Paytone-One">Sqysh</span>&apos;s services after
        the posting of revised Terms of Service constitutes your acceptance of
        the changes.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        5. Governing Law
      </h2>
      <p className="mb-8 text-sm">
        These Terms of Service shall be governed by and construed in accordance
        with the laws of the Commonwealth of Massachusetts, without regard to
        its conflict of law provisions.
      </p>
      <h2 className="font-bold text-sm text-slate-100 mb-2">
        6. Contact <span className="font-Paytone-One">Sqysh</span>
      </h2>
      <p className="text-sm mb-8">
        If you have any questions or concerns about these Terms of Service,
        please contact me at:
      </p>
      <ul className="mb-8">
        <li className="text-sm text-slate-100 mb-1">Email: sqysh@sqysh.io</li>
      </ul>
      <p className="text-sm mb-8">
        These Terms of Service can be adjusted further based on the specific
        practices and needs of <span className="font-Paytone-One">Sqysh</span>.
      </p>
    </div>
  );
};

export default TermsOfService;
