let BASE_URL = "http://127.0.0.1:8888";
const TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "http://127.0.0.1:8888";
} else if (process.env.NODE_ENV === "product") {
  BASE_URL = "http://127.0.0.1:8888";
} else if (process.env.NODE_ENV === "test") {
  BASE_URL = "http://127.0.0.1:8888";
}

export { BASE_URL, TIME_OUT };
