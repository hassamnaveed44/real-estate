import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-full min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16 bg-[#141414]">
      <SignIn
        fallbackRedirectUrl="/"
        signUpUrl="/sign-up"
        appearance={{
          variables: {
            colorPrimary: "#703BF7",
            colorBackground: "#1A1A1A",
            colorForeground: "#FFFFFF",
            colorMutedForeground: "#999999",
            colorInput: "#141414",
            colorInputForeground: "#FFFFFF",
            colorNeutral: "#FFFFFF",
          },
          elements: {
            rootBox: "mx-auto",
            card: "bg-[#1A1A1A] border border-[#262626] shadow-2xl rounded-[16px]",
            headerTitle: "!text-white text-2xl font-bold font-sans",
            headerSubtitle: "!text-[#999999]",
            socialButtonsBlockButton: "bg-[#141414] border border-[#262626] !text-white hover:bg-[#202020]",
            socialButtonsBlockButtonText: "!text-white font-medium",
            formButtonPrimary: "bg-[#703BF7] hover:bg-[#5b2bd6] !text-white font-medium py-3 rounded-[10px] transition cursor-pointer",
            formFieldInput: "bg-[#141414] border border-[#262626] !text-white rounded-[10px] focus:border-[#703BF7]",
            formFieldLabel: "!text-white text-sm font-medium",
            footerActionText: "!text-[#999999]",
            footerActionLink: "!text-[#703BF7] hover:!text-[#9065ff] font-medium",
            dividerLine: "bg-[#262626]",
            dividerText: "!text-[#999999]",
          },
        }}
      />
    </div>
  );
}
