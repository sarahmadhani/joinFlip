/* eslint-disable import/prefer-default-export */
import fs from 'fs';

let d;
export const getToken = (namaToken) => {
  const ambilToken = fs.readFileSync('./token.json');
  const objToken = JSON.parse(ambilToken);
  const token = objToken[namaToken];
  return token;
};

export const getTokenMember = (namaToken) => {
  const ambilToken = fs.readFileSync('./tokenMember.json');
  const objToken = JSON.parse(ambilToken);
  const token = objToken[namaToken];
  return token;
};

export function nextMinutes(min) {
  d = new Date();
  d.setMinutes(d.getMinutes() + min);
  return d.toISOString();
}
export function nextHours(hour) {
  d = new Date();
  d.setHours(d.getHours() + hour);
  return d.toISOString();
}
export function pastHours(hour) {
  d = new Date();
  d.setHours(d.getHours() - hour);
  return d.toISOString();
}
export function pastMonth(month) {
  d = new Date();
  d.setMonth(d.getMonth() - month);
  return d.toISOString();
}
export function nextMonth(month) {
  d = new Date();
  d.setMonth(d.getMonth() + month);
  return d.toISOString();
}
export function nextDate(days) {
  d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString();
}
export function currentDate() {
  d = new Date();
  return d.toISOString();
}
export function pastDate(days) {
  d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString();
}
export function pastYear(year) {
  d = new Date();
  d.setFullYear(d.getFullYear() - year);
  return d.toISOString();
 }
 export function nextYear(year) {
  d = new Date();
  d.setFullYear(d.getFullYear() + year);
  return d.toISOString();
 }