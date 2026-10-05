export default function Loading() {
    return (
      <main className="animate-pulse">
        <div className="mb-6 h-8 w-48 rounded-md bg-gray-200" />
  
        <div className="mb-6 rounded-md bg-gray-50 p-6">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-gray-200" />
  
            <div className="space-y-2">
              <div className="h-6 w-40 rounded-md bg-gray-200" />
              <div className="h-4 w-56 rounded-md bg-gray-200" />
            </div>
          </div>
        </div>
  
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-md bg-gray-50 p-4"
            >
              <div className="mb-3 h-4 w-24 rounded-md bg-gray-200" />
              <div className="h-7 w-20 rounded-md bg-gray-200" />
            </div>
          ))}
        </div>
  
        <div className="mb-4 h-6 w-24 rounded-md bg-gray-200" />
  
        <div className="rounded-md bg-gray-50 p-4">
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-12 w-full rounded-md bg-gray-200"
              />
            ))}
          </div>
        </div>
      </main>
    );
  }