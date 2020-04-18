import { relativeDate } from "../helpers";

describe("function: relativeDate", () => {
  test("under 1 min => just now", () => {
    expect(relativeDate(new Date() - 10 * 1000)).toEqual("just now");
  });
  test("n minutes ago => n min. ago", () => {
    const date = new Date(new Date() - 60 * 3 * 1000);
    expect(relativeDate(date)).toEqual("3 min. ago");
  });
  test("n hours ago => n hr. ago", () => {
    const date = new Date(new Date() - 60 * 60 * 3 * 1000);
    expect(relativeDate(date)).toEqual("3 hr. ago");
  });
  test("in this week => n day ago", () => {
    const date = new Date(new Date() - 60 * 60 * 28 * 1000);
    expect(relativeDate(date)).toEqual("1 day ago");
  });
  test("more than a week => show string date", () => {
    const date = new Date(new Date() - 60 * 60 * 9 * 24 * 1000);
    expect(relativeDate(date)).toEqual(date.toLocaleDateString());
  });
});
