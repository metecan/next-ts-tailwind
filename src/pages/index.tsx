import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <main>
      <div className="h-[100vh] flex flex-col justify-center align-middle text-center">
        <h1 className="text-[72px] bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 font-extrabold">
          All the best for your next project!
        </h1>
        <h2 className="text-2xl max-w-md mx-auto">
          A Next.js Boilerplate with TypeScript and Tailwind CSS by &nbsp;
          <a className="text-[#3f3cbb]" target="_blank" rel="noopener noreferrer" href="https://github.com/metecan">
            metecan
          </a>
        </h2>
      </div>
    </main>
  );
};

export default Home;
