interface IFooterProps {
  copyrightText: string;
  companyName: string;
}

const Component = ({ copyrightText, companyName }: IFooterProps) => {
  return (
    <footer>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left dark:border-gray-700 dark:text-gray-400">
          <span className="block sm:inline">{copyrightText}</span>{' '}
          <span className="block sm:inline">{companyName}</span>
        </div>
      </div>
    </footer>
  );
};

export default Component;