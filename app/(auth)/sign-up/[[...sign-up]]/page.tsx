import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className="flex items-center justify-center p-10">
    <SignUp appearance={{
          elements: {
            rootBox: 'bg-white rounded-lg p-8 shadow-md',
            card: 'bg-gray-100 p-6 rounded-md',
            headerTitle: 'text-2xl font-bold mb-4',
            headerSubtitle: 'text-gray-600 mb-6',
            formFieldInput: 'border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500',
            formButtonPrimary: 'bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600',
          },
        }}
         redirectUrl="/dashboard"
        />
</div>
  )
}
