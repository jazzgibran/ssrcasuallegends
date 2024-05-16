import { Metadata } from 'next';
 
export const metadata: Metadata = {
    title: 'Blog',
  };

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div
        className="flex flex-col items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-24 w-24 text-MountainMeadow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c.637 0 1.254.122 1.825.342a2.99 2.99 0 00-.825-.842V6a2 2 0 10-2 0v1.5c0 .275.11.524.29.707A5.972 5.972 0 0112 8zm0 2a4 4 0 100 8 4 4 0 000-8zm0 6a2 2 0 110-4 2 2 0 010 4zm-4-4a2 2 0 113.999-.001A2 2 0 018 12zm8 0a2 2 0 11.001 3.999A2 2 0 0116 12zm1-4a2 2 0 11.001 3.999A2 2 0 0117 8zm-10 0a2 2 0 11.001 3.999A2 2 0 017 8zm1.341-3.66a2 2 0 112.829 2.829 2 2 0 01-2.829-2.829zM15.66 4.34a2 2 0 112.829 2.829 2 2 0 01-2.829-2.829z"
          />
        </svg>
        <h1 className="mt-6 text-xl font-semibold text-gray-700">Page Under Construction</h1>
        <p className="text-gray-600">We&apos;ll get there soon!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;