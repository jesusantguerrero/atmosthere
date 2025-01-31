import { addDays, differenceInCalendarDays, format, parseISO, startOfDay, subDays } from "date-fns"
import { differenceInMonths } from "date-fns";
export * from "./formatMoney";
export * from "./isMobile";

export const recurrenceTypes = [
    {
        value: 'MONTHLY',
        label: 'Monthly'
    },
    {
        value: 'WEEKLY',
        label: 'Weekly'
    },
    {
        value: 'DATE',
        label: 'By Date'
    }
]

export const toOrdinals = (num: number) => {
    const suffixes = new Map([
        ['one', 'st'],
        ['two', 'nd'],
        ['few', 'rd'],
        ['other', 'th'],
    ])

    const rule = (new Intl.PluralRules('en-US', { type: 'ordinal'})).select(num)
    const suffix = suffixes.get(rule)
    return `${num}${suffix}`

}

export const monthDays = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
        days.push({
            value: i,
            label: toOrdinals(i)
        });
    }
    days.push({
        value: -1,
        label: 'End of month'
    });
    return days;
}

export const WEEK_DAYS = {
    SU: 'Sunday',
    MO: 'Monday',
    TU: 'Tuesday',
    WE: 'Wednesday',
    TH: 'Thursday',
    FR: 'Friday',
    SA: 'Saturday',
}

export const FREQUENCY_TYPE = {
    WEEKLY: 'WEEKLY',
    MONTHLY: 'MONTHLY',
    BY_DATE: 'BY_DATE'
}

export const getDateFromIso = (isoDateString: string) => {
    return startOfDay(new Date(isoDateString))
}

export const generateRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export enum MonthTypeFormat {
    short = 'MMM',
    long = 'MMMM',
    monthYear = 'MMMM yyyy'
}
export const formatMonth = (dateString: string | Date, type: string = MonthTypeFormat.short ) => {
    try {
        if (typeof dateString == 'string') {
            return format(parseISO(dateString), type)
        } else {
            return format(dateString, type)
        }
    } catch (err) {
        return dateString
    }
}


const formatISOString = (isoString: string, formatString: string) => {
    const date = isoString.includes('T') ? isoString.slice(0, isoString.indexOf('T')) : isoString
    return format(parseISO(date), formatString)
}
export const formatDate = (dateISOString: string|Date, placeholder?: string, formatString = "MMM dd, yyyy") => {
    const emptyDate = '-- --- ----'

    if (!dateISOString && placeholder) return placeholder;
    try {
        return typeof dateISOString == 'string'
        ? formatISOString(dateISOString, formatString)
        : format(dateISOString, formatString);
    }
    catch (e) {
        console.log("There")
        return dateISOString ?? emptyDate;
    }
};



export const isCurrentMonth = (dateString: string) => {
    return !differenceInMonths(new Date(), parseISO(dateString));
}


export const dateToIso = (date: Date | null) => {
    return date ? formatDate(date, "yyyy-MM-dd") : null;
  };

type RangeValue = number|Date;
const setRange = (dateCount: number|Date, direction: string): Date => {
    const date = new Date();
    const method = direction == 'back' ? subDays : addDays;

    return typeof dateCount == 'number' ? dateToIso(method(date, dateCount)) : dateToIso(dateCount)

}

export const getDayDiff = (lastDay: string): number|string => {
    try {
        return differenceInCalendarDays(new Date(), parseISO(lastDay));
    } catch (e) {
        return "--"
    }
}

export const getRangeParams = (field: string, range: RangeValue[]|null, direction = 'back') => {
    let rangeString: string = '';

    if (!range) return '';

    if (range.every(value => value !== null)) {
      rangeString = range.map((dateCount) => setRange(dateCount, direction)).join("~");
    } else if (range.at(0) == null && range.at(1) !== null) {
      rangeString = '<' + setRange(range?.at?.(1) ?? 0, direction)
    } else if (range.at(1) !== null) {
      rangeString = '>' + setRange(range.at(0) ?? 0, direction)
    }
    return `filter[${field}]=${rangeString}`;
}

export const getRangeData = (range: RangeValue[]|null, direction = 'back') => {
    let rangeData = [];

    if (!range) return '';

    if (range.every(value => value !== null)) {
      rangeData = range.map((dateCount) => setRange(dateCount, direction));
    } else if (range.at(0) == null && range.at(1) !== null) {
      rangeData[1] =  setRange(range?.at?.(1) ?? 0, direction)
    } else if (range.at(1) !== null) {
      rangeData[0] = setRange(range.at(0) ?? 0, direction)
    }
    return rangeData;
}

export const nameToColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name?.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = Math.abs(hash).toString(16).substring(0, 6);
    return "#" + "0".repeat(6 - color.length) + color; // pad with zeros if necessary
  }

  export const getOrGenerateColor = (index: number, name: string) => {
    const colors = ["#00C4B3", "#5B5293", "#FFB4AA"]
    return colors[index] ?? nameToColor(name);
  }


  export const isJSONString = (jsonString: string) => {
    return jsonString?.match(/(?<=\{)\s*[^{]*?(?=[\},])|\[\]/)
}
