import { vi } from "vitest";

global.ResizeObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };

  global.matchMedia = global.matchMedia ||
  function (query) {
    return {
      matches: false, // Default to false for simplicity
      media: query,
      addListener: vi.fn(), // Mock function
      removeListener: vi.fn(), // Mock function
    };
  };