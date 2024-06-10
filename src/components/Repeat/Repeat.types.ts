import { Frequency } from "rrule";

export enum Weekday {
  MO = "MO",
  TU = "TU",
  WE = "WE",
  TH = "TH",
  FR = "FR",
  SA = "SA",
  SU = "SU",
}

export enum Months {
  JAN = "1",
  FEB = "2",
  MAR = "3",
  APR = "4",
  MAY = "5",
  JUN = "6",
  JUL = "7",
  AUG = "8",
  SEP = "9",
  OCT = "10",
  NOV = "11",
  DEC = "12",
}

export enum MonthBy {
  BYMONTHDAY = "BYMONTHDAY",
  BYSETPOS = "BYSETPOS",
}

export enum YearlyBy {
  BYMONTH = "BYMONTH",
  BYSETPOS = "BYSETPOS",
}

export enum WeekdayExtras {
  DAY = "DAY",
  WEEKDAY = "WEEKDAY",
  WEEKEND = "WEEKEND",
}

export enum OnThe {
  FIRST = "1",
  SECOND = "2",
  THIRD = "3",
  FOURTH = "4",
  LAST = "-1",
}

export const AllWeekDayOptions = {
  ...Weekday,
  ...WeekdayExtras,

};

export interface RepeatDetailsBase {
  interval: number;
}

export interface YearlyRepeatDetails extends RepeatDetailsBase {
  bySetPos?: number[];
  byDay?: Weekday[];
  byMonthDay?: number[];
  byMonth?: number[];
  // yearly has no interval
  interval: never;
}

export interface MonthlyRepeatDetails extends RepeatDetailsBase {
  bySetPos?: number[];
  byDay?: Weekday[];
  byMonthDay?: number[];
}

export interface WeeklyRepeatDetails extends RepeatDetailsBase {
  byDay?: Weekday[];
}

export type RepeatDetails =
  | YearlyRepeatDetails
  | MonthlyRepeatDetails
  | WeeklyRepeatDetails
  | RepeatDetailsBase;
