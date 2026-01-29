import { useTheme } from "../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, darkTheme, lightTheme } = useTheme();

  return (
    <div className="p-6 rounded-xl bg-gray-200 dark:bg-gray-800 shadow-lg text-center">
      <h1 className="text-2xl font-bold mb-4">
        Current Theme: {theme}
      </h1>

      <button
        onClick={darkTheme}
        className="px-4 py-2 mr-3 bg-black text-white rounded"
      >
        Dark
      </button>

      <button
        onClick={lightTheme}
        className="px-4 py-2 bg-white text-black border rounded"
      >
        Light
      </button>
    </div>
  );
}

export default ThemeSwitcher;
