/**
 * Bundle of @devexpress/dx-scheduler-core
 * Generated: 2018-09-04
 * Version: 1.7.2
 * License: https://js.devexpress.com/Licensing
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment')) :
	typeof define === 'function' && define.amd ? define(['exports', 'moment'], factory) :
	(factory((global.DevExpress = global.DevExpress || {}, global.DevExpress.DXSchedulerCore = {}),global.moment));
}(this, (function (exports,moment) { 'use strict';

moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};













var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};





















var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var toPercentage = function toPercentage(value, total) {
  return value * 100 / total;
};

var createExcludedInterval = function createExcludedInterval(day, start) {
  var leftBound = moment(start.day(day));
  return [leftBound, moment(leftBound).hour(start.hour()).endOf('day')];
};

var excludedIntervals = function excludedIntervals(excludedDays, start) {
  return excludedDays.map(function (day) {
    return day === 0 ? 7 : day;
  }).sort(function (a, b) {
    return a - b;
  }).reduce(function (acc, day, i, allDays) {
    if (i && day === allDays[i - 1] + 1) {
      acc[i - 1][1].day(day);
    } else {
      acc.push(createExcludedInterval(day, start));
    }
    return acc;
  }, []);
};

var byDayPredicate = function byDayPredicate(boundary, date) {
  return boundary.isSameOrAfter(date, 'day') && !boundary.isSame(boundary.clone().startOf('day'));
};

var viewPredicate = function viewPredicate(appointment, left, right) {
  var excludedDays = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var filterAllDayAppointments = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var start = appointment.start,
      end = appointment.end;

  var isAppointmentInBoundary = end.isAfter(left) && start.isBefore(right);
  var inInterval = function inInterval(date, interval) {
    return date.isBetween.apply(date, toConsumableArray(interval).concat([null, '[]']));
  };
  var isAppointmentInExcludedDays = !!excludedIntervals(excludedDays, moment(left)).find(function (interval) {
    return inInterval(start, interval) && inInterval(end, interval);
  });

  var considerAllDayAppointment = filterAllDayAppointments ? moment(end).diff(start, 'hours') < 24 : true;

  return isAppointmentInBoundary && !isAppointmentInExcludedDays && considerAllDayAppointment;
};

var sortAppointments = function sortAppointments(appointments) {
  var byDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return appointments.slice().sort(function (a, b) {
    var compareValue = byDay ? 'day' : undefined;
    if (a.start.isBefore(b.start, compareValue)) return -1;
    if (a.start.isAfter(b.start, compareValue)) return 1;
    if (a.start.isSame(b.start, compareValue)) {
      if (a.end.isBefore(b.end)) return 1;
      if (a.end.isAfter(b.end)) return -1;
    }
    return 0;
  });
};

var findOverlappedAppointments = function findOverlappedAppointments(sortedAppointments) {
  var byDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var appointments = sortedAppointments.slice();
  var groups = [];
  var totalIndex = 0;

  while (totalIndex < appointments.length) {
    groups.push([]);
    var current = appointments[totalIndex];
    var currentGroup = groups[groups.length - 1];
    var next = appointments[totalIndex + 1];
    var maxBoundary = current.end;

    currentGroup.push(current);
    totalIndex += 1;
    while (next && (maxBoundary.isAfter(next.start) || byDay && byDayPredicate(maxBoundary, next.start))) {
      currentGroup.push(next);
      if (maxBoundary.isBefore(next.end)) maxBoundary = next.end;
      totalIndex += 1;
      next = appointments[totalIndex];
    }
  }
  return groups;
};

var adjustAppointments = function adjustAppointments(groups) {
  var byDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return groups.map(function (items) {
    var offset = 0;
    var reduceValue = 1;
    var appointments = items.slice();
    var groupLength = appointments.length;
    for (var startIndex = 0; startIndex < groupLength; startIndex += 1) {
      var appointment = appointments[startIndex];
      if (appointment.offset === undefined) {
        var maxBoundary = appointment.end;
        appointment.offset = offset;
        for (var index = startIndex + 1; index < groupLength; index += 1) {
          if (appointments[index].offset === undefined) {
            if (!byDay && maxBoundary.isSameOrBefore(appointments[index].start) || byDay && maxBoundary.isBefore(appointments[index].start, 'day')) {
              maxBoundary = appointments[index].end;
              appointments[index].offset = offset;
            }
          }
        }

        offset += 1;
        if (reduceValue < offset) reduceValue = offset;
      }
    }
    return { items: appointments, reduceValue: reduceValue };
  });
};

var calculateFirstDateOfWeek = function calculateFirstDateOfWeek(currentDate, firstDayOfWeek) {
  var excludedDays = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var currentLocale = moment.locale();
  moment.updateLocale('tmp-locale', {
    week: { dow: firstDayOfWeek }
  });
  var firstDateOfWeek = moment(currentDate).startOf('week');
  if (excludedDays.indexOf(firstDayOfWeek) !== -1) {
    excludedDays.slice().sort().forEach(function (day) {
      if (day === firstDateOfWeek.day()) {
        firstDateOfWeek.add(1, 'days');
      }
    });
  }
  moment.locale(currentLocale);

  return firstDateOfWeek.toDate();
};

var unwrapGroups = function unwrapGroups(groups) {
  return groups.reduce(function (acc, _ref) {
    var items = _ref.items,
        reduceValue = _ref.reduceValue;

    acc.push.apply(acc, toConsumableArray(items.map(function (appointment) {
      return {
        start: appointment.start,
        end: appointment.end,
        dataItem: appointment.dataItem,
        offset: appointment.offset,
        reduceValue: reduceValue
      };
    })));
    return acc;
  }, []);
};

var dayScale = function dayScale() {
  var currentDate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();
  var firsDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var dayCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 7;
  var excluded = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var result = [];
  var date = moment(calculateFirstDateOfWeek(currentDate, firsDayOfWeek, excluded));
  for (var index = 0; index < dayCount; index += 1) {
    if (excluded.findIndex(function (item) {
      return item === date.day();
    }) === -1) {
      result.push(date.toDate());
    }
    date.add(1, 'days');
  }
  return result;
};

var appointments = function appointments(data, getAppointmentStartDate, getAppointmentEndDate) {
  return data.map(function (appointment) {
    return {
      start: getAppointmentStartDate(appointment),
      end: getAppointmentEndDate(appointment),
      dataItem: appointment
    };
  });
};

var TOP_CELL_OFFSET = 0.3;
var CELL_BOUND_OFFSET_PX = 2;

var sliceAppointmentByWeek = function sliceAppointmentByWeek(timeBounds, appointment, step) {
  var left = timeBounds.left,
      right = timeBounds.right;

  var pieces = [];
  var start = appointment.start,
      end = appointment.end,
      restFields = objectWithoutProperties(appointment, ['start', 'end']);

  var apptStart = start;
  var apptEnd = end;
  if (apptStart.isBefore(left)) apptStart = left.clone();
  if (apptEnd.isAfter(right)) apptEnd = right.clone();
  var pieceFrom = apptStart.clone();
  var pieceTo = apptStart.clone();
  var i = 0;
  while (pieceTo.isBefore(apptEnd)) {
    var currentRigthBound = left.clone().add(step * i, 'days').subtract(1, 'second');
    if (currentRigthBound.isAfter(apptStart)) {
      pieceTo = apptStart.clone().add(step * i, 'days');
      if (pieceTo.isAfter(currentRigthBound)) {
        pieceTo = currentRigthBound.clone();
      }
      if (pieceTo.isAfter(apptEnd)) {
        pieceTo = apptEnd.clone();
      }
      if (!pieceFrom.isSame(pieceTo)) {
        pieces.push(_extends({ start: pieceFrom, end: pieceTo }, restFields));
        pieceFrom = pieceTo.clone().add(1, 'second');
      }
    }
    i += 1;
  }
  return pieces;
};

var getCellRect = function getCellRect(date, monthCells, cellElements, takePrev) {
  var startViewDate = moment(monthCells[0][0].value);
  var currentDate = moment(date);
  var cellIndex = currentDate.diff(startViewDate, 'days');
  if (takePrev && currentDate.format() === currentDate.startOf('day').format()) {
    cellIndex -= 1;
  }

  var cellElement = cellElements[cellIndex];

  var _cellElement$getBound = cellElement.getBoundingClientRect(),
      top = _cellElement$getBound.top,
      left = _cellElement$getBound.left,
      width = _cellElement$getBound.width,
      height = _cellElement$getBound.height;

  var parentRect = { left: 0, top: 0, width: 0 };
  if (cellElement.offsetParent) {
    parentRect = cellElement.offsetParent.getBoundingClientRect();
  }
  return {
    top: top,
    left: left,
    width: width,
    height: height,
    parentRect: parentRect
  };
};

var getRectByDates = function getRectByDates(startDate, endDate, monthCells, cellElements) {
  var firstCellRect = getCellRect(startDate, monthCells, cellElements, false);
  var lastCellRect = getCellRect(endDate, monthCells, cellElements, true);

  var top = firstCellRect.top + firstCellRect.height * TOP_CELL_OFFSET;
  var height = firstCellRect.height - firstCellRect.height * TOP_CELL_OFFSET;

  return {
    top: top - firstCellRect.parentRect.top,
    left: firstCellRect.left - firstCellRect.parentRect.left + CELL_BOUND_OFFSET_PX,
    width: lastCellRect.left - firstCellRect.left + firstCellRect.width - CELL_BOUND_OFFSET_PX,
    height: height,
    parentWidth: firstCellRect.parentRect.width
  };
};

var HORIZONTAL_APPOINTMENT_TYPE = 'horizontal';
var VERTICAL_APPOINTMENT_TYPE = 'vertical';

var DAY_COUNT = 7;
var WEEK_COUNT = 6;
var MONTH_LENGTH = 31;

var endViewBoundary = function endViewBoundary(cells) {
  var lastCellIndex = cells.length - 1;
  var lastDate = moment(cells[lastCellIndex][WEEK_COUNT].value);
  return lastDate.startOf('day').add(1, 'days').subtract(1, 'second').toDate();
};

var monthCells = function monthCells(currentDate, firstDayOfWeek) {
  var intervalCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var currentMonth = moment(currentDate).month();
  var targetDate = moment(currentDate);
  var currentMonths = [targetDate.month()];
  while (currentMonths.length < intervalCount) {
    currentMonths.push(targetDate.add(1, 'months').month());
  }
  var currentDay = moment(currentDate).date();
  var firstMonthDate = moment(currentDate).date(1);
  var firstMonthDay = firstMonthDate.day() - firstDayOfWeek;
  var prevMonthDayCount = firstMonthDate.day(firstMonthDay).day() || DAY_COUNT;
  var prevMonth = moment(currentDate).subtract(1, 'months');
  var prevMonthStartDay = prevMonth.daysInMonth() - (prevMonthDayCount - 1);
  var from = moment().year(prevMonth.year()).month(prevMonth.month()).date(prevMonthStartDay).startOf('day');

  var result = [];
  while (result.length < Math.trunc(MONTH_LENGTH * intervalCount / DAY_COUNT) + 2) {
    var week = [];
    while (week.length < DAY_COUNT) {
      week.push({
        value: from.toDate(),
        isOtherMonth: currentMonths.findIndex(function (month) {
          return month === from.month();
        }) === -1,
        isCurrent: currentDay === from.date() && from.month() === currentMonth
      });
      from.add(1, 'day');
    }
    result.push(week);
  }
  return result;
};

var calculateDateIntervals = function calculateDateIntervals(appointments, leftBound, rightBound) {
  return appointments.map(function (_ref) {
    var start = _ref.start,
        end = _ref.end,
        restArgs = objectWithoutProperties(_ref, ['start', 'end']);
    return _extends({ start: moment(start), end: moment(end) }, restArgs);
  }).filter(function (appointment) {
    return viewPredicate(appointment, leftBound, rightBound);
  }).reduce(function (acc, appointment) {
    return [].concat(toConsumableArray(acc), toConsumableArray(sliceAppointmentByWeek({ left: moment(leftBound), right: moment(rightBound) }, appointment, DAY_COUNT)));
  }, []);
};

var calculateRectsByDateIntervals = function calculateRectsByDateIntervals(intervals, cells, cellElements) {
  var sorted = sortAppointments(intervals, true);
  var grouped = findOverlappedAppointments(sorted, true);

  return unwrapGroups(adjustAppointments(grouped, true)).map(function (appts) {
    var _getRectByDates = getRectByDates(appts.start, appts.end, cells, cellElements),
        top = _getRectByDates.top,
        left = _getRectByDates.left,
        width = _getRectByDates.width,
        height = _getRectByDates.height,
        parentWidth = _getRectByDates.parentWidth;

    return {
      top: top + height / appts.reduceValue * appts.offset,
      height: height / appts.reduceValue,
      left: toPercentage(left, parentWidth),
      width: toPercentage(width, parentWidth),
      dataItem: appts.dataItem,
      type: HORIZONTAL_APPOINTMENT_TYPE
    };
  });
};

var monthAppointmentRect = function monthAppointmentRect(appointments, startViewDate, endViewDate, cells, cellElements) {
  var dateIntervals = calculateDateIntervals(appointments, startViewDate, endViewDate);
  return calculateRectsByDateIntervals(dateIntervals, cells, cellElements);
};

var CELL_GAP = 0.15;

var getCellByDate = function getCellByDate(days, times, date) {
  var takePrev = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  var rowIndex = times.findIndex(function (timeCell) {
    var startTime = moment(timeCell.start);
    var endTime = moment(timeCell.end);
    var cellStart = moment(date).hour(startTime.hours()).minutes(startTime.minutes());
    var cellEnd = moment(date).hour(endTime.hours()).minutes(endTime.minutes());
    return moment(date).isBetween(cellStart, cellEnd, null, takePrev ? '(]' : '[)');
  });

  var cellIndex = days.findIndex(function (day) {
    return moment(date).isSame(day, 'date');
  });
  var cellStartTime = moment(times[rowIndex].start);
  var cellStartDate = moment(days[cellIndex]).hour(cellStartTime.hours()).minutes(cellStartTime.minutes()).toDate();
  var totalCellIndex = rowIndex * days.length + cellIndex;
  return {
    index: totalCellIndex,
    startDate: cellStartDate
  };
};

var getCellRect$1 = function getCellRect(date, days, times, cellDuration, cellElements, takePrev) {
  var _getCellByDate = getCellByDate(days, times, date, takePrev),
      cellIndex = _getCellByDate.index,
      cellStartDate = _getCellByDate.startDate;

  var cellElement = cellElements[cellIndex];

  var _cellElement$getBound = cellElement.getBoundingClientRect(),
      top = _cellElement$getBound.top,
      left = _cellElement$getBound.left,
      width = _cellElement$getBound.width,
      cellHeight = _cellElement$getBound.height;

  var timeOffset = moment(date).diff(cellStartDate, 'minutes');
  var topOffset = cellHeight * (timeOffset / cellDuration);
  var parentRect = { left: 0, top: 0, width: 0 };
  if (cellElement.offsetParent) {
    parentRect = cellElement.offsetParent.getBoundingClientRect();
  }
  return {
    top: top,
    left: left,
    width: width,
    topOffset: topOffset,
    parentRect: parentRect
  };
};

var getRectByDates$1 = function getRectByDates(startDate, endDate, days, times, cellDuration, cellElements) {
  var firstCellRect = getCellRect$1(startDate, days, times, cellDuration, cellElements, false);
  var lastCellRect = getCellRect$1(endDate, days, times, cellDuration, cellElements, true);

  var top = firstCellRect.top + firstCellRect.topOffset;
  var height = lastCellRect.top + lastCellRect.topOffset - top;

  return {
    width: firstCellRect.width - firstCellRect.width * CELL_GAP,
    top: top - firstCellRect.parentRect.top,
    left: firstCellRect.left - firstCellRect.parentRect.left,
    parentWidth: firstCellRect.parentRect.width,
    height: height
  };
};

var sliceAppointmentByDay = function sliceAppointmentByDay(appointment) {
  var start = appointment.start,
      end = appointment.end,
      dataItem = appointment.dataItem;

  if (start.isSame(end, 'day')) {
    return [appointment];
  }
  return [{ start: start, end: moment(start).endOf('day'), dataItem: dataItem }, { start: moment(end).startOf('day'), end: end, dataItem: dataItem }];
};

var dayBoundaryPredicate = function dayBoundaryPredicate(appointment, leftBound, rightBound) {
  var excludedDays = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

  var dayStart = moment(leftBound);
  var dayEnd = moment(rightBound);
  var startDayTime = moment(appointment.start).hour(dayStart.hour()).minutes(dayStart.minutes());
  var endDayTime = moment(appointment.start).hour(dayEnd.hour()).minutes(dayEnd.minutes());

  if (excludedDays.findIndex(function (day) {
    return day === moment(appointment.start).day();
  }) !== -1) return false;

  return appointment.end.isAfter(startDayTime) && appointment.start.isBefore(endDayTime);
};

var reduceAppointmentByDayBounds = function reduceAppointmentByDayBounds(appointment, leftBound, rightBound) {
  var dayStart = moment(leftBound);
  var dayEnd = moment(rightBound);
  var startDayTime = moment(appointment.start).hour(dayStart.hour()).minutes(dayStart.minutes()).seconds(dayStart.seconds());
  var endDayTime = moment(appointment.start).hour(dayEnd.hour()).minutes(dayEnd.minutes()).seconds(dayEnd.seconds());

  return _extends({}, appointment, appointment.start.isSameOrBefore(startDayTime) ? { start: startDayTime } : null, appointment.end.isSameOrAfter(endDayTime) ? { end: endDayTime } : null);
};

var subtractSecond = function subtractSecond(date) {
  return moment(date).subtract(1, 'second').toDate();
};

var calculateViewBound = function calculateViewBound(dateBound, timeBound) {
  var time = moment(timeBound);
  return moment(dateBound).hour(time.hours()).minute(time.minutes()).toDate();
};

var calculateDateIntervals$1 = function calculateDateIntervals(appointments, leftBound, rightBound, excludedDays) {
  return appointments.map(function (_ref) {
    var start = _ref.start,
        end = _ref.end,
        restArgs = objectWithoutProperties(_ref, ['start', 'end']);
    return _extends({ start: moment(start), end: moment(end) }, restArgs);
  }).filter(function (appointment) {
    return viewPredicate(appointment, leftBound, rightBound, excludedDays, true);
  }).reduce(function (acc, appointment) {
    return [].concat(toConsumableArray(acc), toConsumableArray(sliceAppointmentByDay(appointment)));
  }, []).filter(function (appointment) {
    return dayBoundaryPredicate(appointment, leftBound, rightBound, excludedDays);
  }).map(function (appointment) {
    return reduceAppointmentByDayBounds(appointment, leftBound, rightBound);
  });
};

var calculateRectsByDateIntervals$1 = function calculateRectsByDateIntervals(intervals, dayScale, timeScale, cellDuration, cellElements) {
  var sorted = sortAppointments(intervals);
  var grouped = findOverlappedAppointments(sorted);

  return unwrapGroups(adjustAppointments(grouped)).map(function (appointment) {
    var _getRectByDates = getRectByDates$1(appointment.start, appointment.end, dayScale, timeScale, cellDuration, cellElements),
        top = _getRectByDates.top,
        left = _getRectByDates.left,
        width = _getRectByDates.width,
        height = _getRectByDates.height,
        parentWidth = _getRectByDates.parentWidth;

    var widthInPx = width / appointment.reduceValue;
    return {
      top: top,
      height: height,
      left: toPercentage(left + widthInPx * appointment.offset, parentWidth),
      width: toPercentage(widthInPx, parentWidth),
      dataItem: appointment.dataItem,
      type: VERTICAL_APPOINTMENT_TYPE
    };
  });
};

var appointmentRects = function appointmentRects(appointments, leftBound, rightBound, excludedDays, dayScale, timeScale, cellDuration, cellElements) {
  var dateIntervals = calculateDateIntervals$1(appointments, leftBound, rightBound, excludedDays);
  return calculateRectsByDateIntervals$1(dateIntervals, dayScale, timeScale, cellDuration, cellElements);
};

var timeScale = function timeScale(currentDate, firstDayOfWeek, startDayHour, endDayHour, cellDuration, excludedDays) {
  var result = [];
  var startViewDate = calculateFirstDateOfWeek(currentDate, firstDayOfWeek, excludedDays);
  var left = moment(startViewDate).startOf('hour').hour(startDayHour);
  var right = moment(startViewDate).startOf('hour').hour(endDayHour);
  while (left.isBefore(right)) {
    var startDate = left.toDate();
    left.add(cellDuration, 'minutes');
    result.push({ start: startDate, end: left.toDate() });
  }
  result[result.length - 1].end = subtractSecond(result[result.length - 1].end);
  return result;
};

var startViewDate = function startViewDate(days, times) {
  return calculateViewBound(days[0], times[0].start);
};

var endViewDate = function endViewDate(days, times) {
  var bound = calculateViewBound(days[days.length - 1], times[times.length - 1].end);
  return subtractSecond(bound);
};

var changeCurrentDate = function changeCurrentDate(currentDate, _ref) {
  var nextDate = _ref.nextDate,
      step = _ref.step,
      amount = _ref.amount,
      _ref$back = _ref.back,
      back = _ref$back === undefined ? false : _ref$back;
  return nextDate || moment(currentDate)[back ? 'subtract' : 'add'](amount, step).toDate();
};

var calculateTitleByDays = function calculateTitleByDays(startViewDate, endViewDate) {
  var momentStartViewDate = moment(startViewDate);
  var momentEndViewDate = moment(endViewDate);

  if (momentStartViewDate.isSame(momentEndViewDate, 'day')) {
    return momentStartViewDate.format('D MMMM YYYY');
  }
  if (momentStartViewDate.isSame(momentEndViewDate, 'year')) {
    if (momentStartViewDate.isSame(momentEndViewDate, 'month')) {
      return momentStartViewDate.format('D') + '-' + momentEndViewDate.format('D MMMM YYYY');
    }
    return momentStartViewDate.format('D MMM') + ' - ' + momentEndViewDate.format('D MMM YYYY');
  }
  return momentStartViewDate.format('D MMM YY') + ' - ' + momentEndViewDate.format('D MMM YY');
};

var calculateTitleByMonths = function calculateTitleByMonths(currentDate, intervalCount) {
  var momentCurrentDate = moment(currentDate);

  if (intervalCount === 1) {
    return momentCurrentDate.format('MMMM YYYY');
  }
  var lastMonth = momentCurrentDate.clone().add(intervalCount - 1, 'month');
  if (momentCurrentDate.isSame(lastMonth, 'year')) {
    return momentCurrentDate.format('MMM') + '-' + lastMonth.format('MMM YYYY');
  }
  return momentCurrentDate.format('MMM YY') + ' - ' + lastMonth.format('MMM YY');
};

var viewBoundTitle = function viewBoundTitle(startViewDate, endViewDate, step, currentDate, intervalCount) {
  return step !== 'month' ? calculateTitleByDays(startViewDate, endViewDate) : calculateTitleByMonths(currentDate, intervalCount);
};

exports.dayScale = dayScale;
exports.appointments = appointments;
exports.endViewBoundary = endViewBoundary;
exports.monthCells = monthCells;
exports.monthAppointmentRect = monthAppointmentRect;
exports.appointmentRects = appointmentRects;
exports.timeScale = timeScale;
exports.startViewDate = startViewDate;
exports.endViewDate = endViewDate;
exports.changeCurrentDate = changeCurrentDate;
exports.viewBoundTitle = viewBoundTitle;
exports.HORIZONTAL_APPOINTMENT_TYPE = HORIZONTAL_APPOINTMENT_TYPE;
exports.VERTICAL_APPOINTMENT_TYPE = VERTICAL_APPOINTMENT_TYPE;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=dx-scheduler-core.umd.js.map
