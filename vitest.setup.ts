import "@testing-library/jest-dom";

// jsdom does not include ResizeObserver (used by Radix UI)
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserverMock;
