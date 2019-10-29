/*
 * Copyright 2019 Hitachi Vantara Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const styles = theme => ({
  headerContainer: {
    width: "100%",
    display: "flex"
  },
  headerProps: {
    width: "100%",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    overflow: "hidden"
  },
  headerTextContainer: {
    minWidth: 0,
    padding: `6px ${theme.hv.spacing.xs}px 6px 0px`,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  headerNotSortable: {
    width: `calc(100% - ${theme.hv.spacing.xs}px)`,
    marginLeft: `${theme.hv.spacing.xs}px`
  },
  headerSortable: {
    maxWidth: "calc(100% - 32px)"
  },
  headerAlphaNumeric: {
    float: "left",
    textAlign: "left"
  },
  headerNumeric: {
    float: "right",
    textAlign: "right"
  },
  rtSortIcon: {
    width: "32px",
    height: "32px",
  },
  rtSortIconNumeric: {
    marginLeft: "auto"
  },
  box: {
    width: "30px",
    height: "30px",
    padding: "7px",
    display: "flex",
    alignItems: "center",
    "&>svg": {
      margin: "0 auto"
    }
  }
});

export default styles;
