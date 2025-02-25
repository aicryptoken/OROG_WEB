(self.webpackChunktradingview = self.webpackChunktradingview || []).push([
    [5093], {
        27267: (t, e, i) => {
            "use strict";

            function s(t, e, i, s, l) {
                function o(l) {
                    if (t > l.timeStamp) return;
                    const o = l.target;
                    void 0 !== i && null !== e && null !== o && o.ownerDocument === s && (e.contains(o) || i(l))
                }
                return l.click && s.addEventListener("click", o, !1), l.mouseDown && s.addEventListener("mousedown", o, !1), l.touchEnd && s.addEventListener("touchend", o, !1), l.touchStart && s.addEventListener("touchstart", o, !1), () => {
                    s.removeEventListener("click", o, !1), s.removeEventListener("mousedown", o, !1), s.removeEventListener("touchend", o, !1), s.removeEventListener("touchstart", o, !1)
                }
            }
            i.d(e, {
                addOutsideEventListener: () => s
            })
        },
        967: (t, e, i) => {
            "use strict";
            i.d(e, {
                weekDaysMiniNames: () => n,
                weekDaysShortNames: () => o
            });
            var s = i(44352),
                l = i(84917);
            l.Months.JANUARY, s.t(null, void 0, i(26910)), l.Months.FEBRUARY, s.t(null, void 0, i(16467)), l.Months.MARCH, s.t(null, void 0, i(84675)), l.Months.APRIL, s.t(null, void 0, i(97637)), l.Months.MAY, s.t(null, void 0, i(68327)), l.Months.JUNE, s.t(null, void 0, i(49385)), l.Months.JULY, s.t(null, void 0, i(23230)), l.Months.AUGUST, s.t(null, void 0, i(86797)), l.Months.SEPTEMBER, s.t(null, void 0, i(61132)), l.Months.OCTOBER, s.t(null, void 0, i(90784)), l.Months.NOVEMBER, s.t(null, void 0, i(71194)), l.Months.DECEMBER, s.t(null, void 0, i(55669)), l.Months.JANUARY, s.t(null, void 0, i(95425)), l.Months.FEBRUARY, s.t(null, void 0, i(35050)), l.Months.MARCH, s.t(null, void 0, i(51369)), l.Months.APRIL, s.t(null, void 0, i(42762)), l.Months.MAY, s.t(null, {
                context: "short"
            }, i(27991)), l.Months.JUNE, s.t(null, void 0, i(15224)), l.Months.JULY, s.t(null, void 0, i(6215)), l.Months.AUGUST, s.t(null, void 0, i(38465)), l.Months.SEPTEMBER, s.t(null, void 0, i(57902)), l.Months.OCTOBER, s.t(null, void 0, i(73546)), l.Months.NOVEMBER, s.t(null, void 0, i(71230)), l.Months.DECEMBER, s.t(null, void 0, i(92203)), l.WeekDays.SUNDAY, s.t(null, void 0, i(72149)), l.WeekDays.MONDAY, s.t(null, void 0, i(61199)), l.WeekDays.TUESDAY, s.t(null, void 0, i(44979)), l.WeekDays.WEDNESDAY, s.t(null, void 0, i(7147)), l.WeekDays.THURSDAY, s.t(null, void 0, i(7951)), l.WeekDays.FRIDAY, s.t(null, void 0, i(72970)), l.WeekDays.SATURDAY, s.t(null, void 0, i(1144));
            const o = {
                    [l.WeekDays.SUNDAY]: s.t(null, void 0, i(86577)),
                    [l.WeekDays.MONDAY]: s.t(null, void 0, i(83085)),
                    [l.WeekDays.TUESDAY]: s.t(null, void 0, i(94316)),
                    [l.WeekDays.WEDNESDAY]: s.t(null, void 0, i(75094)),
                    [l.WeekDays.THURSDAY]: s.t(null, void 0, i(9787)),
                    [l.WeekDays.FRIDAY]: s.t(null, void 0, i(564)),
                    [l.WeekDays.SATURDAY]: s.t(null, void 0, i(36835))
                },
                n = {
                    [l.WeekDays.SUNDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(85954)),
                    [l.WeekDays.MONDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(11268)),
                    [l.WeekDays.TUESDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(31533)),
                    [l.WeekDays.WEDNESDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(26230)),
                    [l.WeekDays.THURSDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(24793)),
                    [l.WeekDays.FRIDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(19801)),
                    [l.WeekDays.SATURDAY]: s.t(null, {
                        context: "day_of_week"
                    }, i(63331))
                }
        },
        77975: (t, e, i) => {
            "use strict";
            i.d(e, {
                useWatchedValueReadonly: () => l
            });
            var s = i(50959);
            const l = (t, e = !1) => {
                const i = "watchedValue" in t ? t.watchedValue : void 0,
                    l = "defaultValue" in t ? t.defaultValue : t.watchedValue.value(),
                    [o, n] = (0, s.useState)(i ? i.value() : l);
                return (e ? s.useLayoutEffect : s.useEffect)((() => {
                    if (i) {
                        n(i.value());
                        const t = t => n(t);
                        return i.subscribe(t), () => i.unsubscribe(t)
                    }
                    return () => {}
                }), [i]), o
            }
        },
        23709: t => {
            t.exports = {
                "animation-minimize-corner-left-top": "animation-minimize-corner-left-top-zSI0mRIH",
                "animation-minimize-corner-right-top": "animation-minimize-corner-right-top-zSI0mRIH",
                "animation-minimize-corner-right-bottom": "animation-minimize-corner-right-bottom-zSI0mRIH",
                "animation-minimize-corner-left-bottom": "animation-minimize-corner-left-bottom-zSI0mRIH",
                "animation-maximize-corner-left-top": "animation-maximize-corner-left-top-zSI0mRIH",
                "animation-maximize-corner-right-top": "animation-maximize-corner-right-top-zSI0mRIH",
                "animation-maximize-corner-right-bottom": "animation-maximize-corner-right-bottom-zSI0mRIH",
                "animation-maximize-corner-left-bottom": "animation-maximize-corner-left-bottom-zSI0mRIH"
            }
        },
        83314: t => {
            t.exports = {
                wrapper: "wrapper-hPiAkrn3",
                timezone: "timezone-hPiAkrn3",
                sessionDayWrapper: "sessionDayWrapper-hPiAkrn3",
                nowWrapper: "nowWrapper-hPiAkrn3",
                now: "now-hPiAkrn3",
                sessionDay: "sessionDay-hPiAkrn3",
                weekDay: "weekDay-hPiAkrn3",
                sessionDaySegments: "sessionDaySegments-hPiAkrn3",
                timeMarkWrapper: "timeMarkWrapper-hPiAkrn3",
                timeMarkSegment: "timeMarkSegment-hPiAkrn3",
                timeMark: "timeMark-hPiAkrn3",
                timeMarkSegmentAlignByEnds: "timeMarkSegmentAlignByEnds-hPiAkrn3",
                segment: "segment-hPiAkrn3",
                small: "small-hPiAkrn3",
                start: "start-hPiAkrn3",
                end: "end-hPiAkrn3",
                active: "active-hPiAkrn3",
                green: "green-hPiAkrn3",
                orange: "orange-hPiAkrn3",
                blue: "blue-hPiAkrn3",
                gray: "gray-hPiAkrn3",
                tooltip: "tooltip-hPiAkrn3",
                time: "time-hPiAkrn3"
            }
        },
        77539: t => {
            t.exports = {
                marginlegendhoriz: "4px",
                legend: "legend-l31H9iuA",
                item: "item-l31H9iuA",
                withAction: "withAction-l31H9iuA",
                selected: "selected-l31H9iuA",
                last: "last-l31H9iuA",
                text: "text-l31H9iuA",
                noWrapWrapper: "noWrapWrapper-l31H9iuA",
                noWrap: "noWrap-l31H9iuA",
                series: "series-l31H9iuA",
                valuesAdditionalWrapper: "valuesAdditionalWrapper-l31H9iuA",
                valueItem: "valueItem-l31H9iuA",
                valueTitle: "valueTitle-l31H9iuA",
                valueValue: "valueValue-l31H9iuA",
                hideUniportantValueItems: "hideUniportantValueItems-l31H9iuA",
                unimportant: "unimportant-l31H9iuA",
                valuesWrapper: "valuesWrapper-l31H9iuA",
                wrappable: "wrappable-l31H9iuA",
                directionColumn: "directionColumn-l31H9iuA",
                titleWrapper: "titleWrapper-l31H9iuA",
                button: "button-l31H9iuA",
                statusesWrapper: "statusesWrapper-l31H9iuA",
                buttonsWrapper: "buttonsWrapper-l31H9iuA",
                buttons: "buttons-l31H9iuA",
                noActions: "noActions-l31H9iuA",
                title: "title-l31H9iuA",
                intervalTitle: "intervalTitle-l31H9iuA",
                disabled: "disabled-l31H9iuA",
                disabledOnInterval: "disabledOnInterval-l31H9iuA",
                withDot: "withDot-l31H9iuA",
                withCustomTextColor: "withCustomTextColor-l31H9iuA",
                study: "study-l31H9iuA",
                mainTitle: "mainTitle-l31H9iuA",
                descTitle: "descTitle-l31H9iuA",
                hideValues: "hideValues-l31H9iuA",
                has5Buttons: "has5Buttons-l31H9iuA",
                stayInHoveredMode: "stayInHoveredMode-l31H9iuA",
                withTail: "withTail-l31H9iuA",
                loading: "loading-l31H9iuA",
                loader: "loader-l31H9iuA",
                providerTitle: "providerTitle-l31H9iuA",
                exchangeTitle: "exchangeTitle-l31H9iuA",
                styleTitle: "styleTitle-l31H9iuA",
                minHideIntervalTitle: "minHideIntervalTitle-l31H9iuA",
                microHideIntervalTitle: "microHideIntervalTitle-l31H9iuA",
                hideExchangeProviderTitles: "hideExchangeProviderTitles-l31H9iuA",
                flagged: "flagged-l31H9iuA",
                medium: "medium-l31H9iuA",
                minimized: "minimized-l31H9iuA",
                micro: "micro-l31H9iuA",
                linked: "linked-l31H9iuA",
                onlyOneButtonCanBeStick: "onlyOneButtonCanBeStick-l31H9iuA",
                touchMode: "touchMode-l31H9iuA",
                buttonIcon: "buttonIcon-l31H9iuA",
                flag: "flag-l31H9iuA",
                invisibleHover: "invisibleHover-l31H9iuA",
                eye: "eye-l31H9iuA",
                eyeLoading: "eyeLoading-l31H9iuA",
                "eye-animation": "eye-animation-l31H9iuA",
                linking: "linking-l31H9iuA",
                intervalEye: "intervalEye-l31H9iuA",
                markerContainer: "markerContainer-l31H9iuA",
                flagWrapper: "flagWrapper-l31H9iuA",
                sourcesWrapper: "sourcesWrapper-l31H9iuA",
                legendMainSourceWrapper: "legendMainSourceWrapper-l31H9iuA",
                sources: "sources-l31H9iuA",
                toggler: "toggler-l31H9iuA pane-button-e6PF69Df",
                onlyOneSourceShown: "onlyOneSourceShown-l31H9iuA",
                counter: "counter-l31H9iuA",
                iconArrow: "iconArrow-l31H9iuA",
                objectTree: "objectTree-l31H9iuA",
                closed: "closed-l31H9iuA",
                objectsTreeCanBeShown: "objectsTreeCanBeShown-l31H9iuA"
            }
        },
        34362: t => {
            t.exports = {
                loader: "loader-_7n3rLPY",
                loaderItem: "loaderItem-_7n3rLPY",
                "loader-animation": "loader-animation-_7n3rLPY",
                touchMode: "touchMode-_7n3rLPY"
            }
        },
        94815: t => {
            t.exports = {
                "css-value-pane-controls-padding-left": "1px",
                "css-value-pane-controls-padding-right": "4px",
                css_value_pane_controls_margin_top: "4",
                css_value_pane_controls_button_size: "22",
                css_value_pane_controls_button_touch_size: "22",
                paneControls: "paneControls-JQv8nO8e",
                hidden: "hidden-JQv8nO8e",
                forceHidden: "forceHidden-JQv8nO8e",
                button: "button-JQv8nO8e pane-button-e6PF69Df",
                buttonIcon: "buttonIcon-JQv8nO8e",
                minimize: "minimize-JQv8nO8e",
                restore: "restore-JQv8nO8e",
                newButton: "newButton-JQv8nO8e",
                touchMode: "touchMode-JQv8nO8e",
                maximize: "maximize-JQv8nO8e",
                collapse: "collapse-JQv8nO8e",
                "maximize-animation-up-bracket": "maximize-animation-up-bracket-JQv8nO8e",
                "maximize-animation-down-bracket": "maximize-animation-down-bracket-JQv8nO8e",
                "minimize-animation-up-bracket": "minimize-animation-up-bracket-JQv8nO8e",
                "minimize-animation-down-bracket": "minimize-animation-down-bracket-JQv8nO8e",
                up: "up-JQv8nO8e",
                "up-animation": "up-animation-JQv8nO8e",
                down: "down-JQv8nO8e",
                "down-animation": "down-animation-JQv8nO8e",
                buttonsWrapper: "buttonsWrapper-JQv8nO8e"
            }
        },
        7488: t => {
            t.exports = {
                blockHidden: "blockHidden-e6PF69Df",
                "pane-button": "pane-button-e6PF69Df"
            }
        },
        64123: t => {
            t.exports = {
                "css-value-small-size": "18px",
                "css-value-medium-size": "22px",
                "css-value-large-size": "28px",
                "css-value-border-radius-small-size": "9px",
                "css-value-border-radius-medium-size": "11px",
                "css-value-border-radius-large-size": "8px",
                statuses: "statuses-Lgtz1OtS",
                statusItem: "statusItem-Lgtz1OtS",
                small: "small-Lgtz1OtS",
                medium: "medium-Lgtz1OtS",
                large: "large-Lgtz1OtS",
                blinking: "blinking-Lgtz1OtS",
                oneWidgetsVisible: "oneWidgetsVisible-Lgtz1OtS",
                twoWidgetsVisible: "twoWidgetsVisible-Lgtz1OtS",
                threeWidgetsVisible: "threeWidgetsVisible-Lgtz1OtS",
                "blinking-animation": "blinking-animation-Lgtz1OtS",
                marketStatusOpen: "marketStatusOpen-Lgtz1OtS",
                marketStatusClose: "marketStatusClose-Lgtz1OtS",
                marketStatusPre: "marketStatusPre-Lgtz1OtS",
                marketStatusPost: "marketStatusPost-Lgtz1OtS",
                marketStatusHoliday: "marketStatusHoliday-Lgtz1OtS",
                marketStatusExpired: "marketStatusExpired-Lgtz1OtS",
                marketStatusCustom: "marketStatusCustom-Lgtz1OtS",
                invalidSymbol: "invalidSymbol-Lgtz1OtS",
                replayModeAutoPlay: "replayModeAutoPlay-Lgtz1OtS",
                replayModePause: "replayModePause-Lgtz1OtS",
                replayModePointSelect: "replayModePointSelect-Lgtz1OtS",
                "blinking-animation-custom": "blinking-animation-custom-Lgtz1OtS",
                notAccurate: "notAccurate-Lgtz1OtS",
                delay: "delay-Lgtz1OtS",
                eod: "eod-Lgtz1OtS",
                dataProblemHigh: "dataProblemHigh-Lgtz1OtS",
                dataProblemLow: "dataProblemLow-Lgtz1OtS"
            }
        },
        33283: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                ControlBarNavigation: () => Y
            });
            var s = i(50151),
                l = i(44352),
                o = i(32563),
                n = i(14483),
                a = i(78159),
                r = i(38223),
                d = i(70027),
                u = i(61814),
                h = i(49483),
                c = i(68335),
                _ = (i(51768), i(23317)),
                p = i(89612),
                m = i(77576),
                g = i(93724),
                v = i(85877),
                b = i(47725),
                w = i(78529),
                S = i(50119),
                y = i(62884),
                M = i(50662),
                C = i(42205);
            i(23709);
            const E = (0, c.humanReadableModifiers)(c.Modifiers.Alt, !1),
                f = (0, c.humanReadableModifiers)(c.Modifiers.Shift, !1),
                k = (0, c.humanReadableModifiers)(c.Modifiers.Mod, !1),
                V = (0, u.hotKeySerialize)({
                    keys: [E, "R"],
                    text: "{0} + {1}"
                }),
                A = (0, u.hotKeySerialize)({
                    keys: [E, "Click", E, "Enter"],
                    text: "{0} + {1}, {2} + {3}"
                }),
                T = (0, u.hotKeySerialize)({
                    keys: [S],
                    text: "{0}"
                }),
                x = (0, u.hotKeySerialize)({
                    keys: [y],
                    text: "{0}"
                }),
                L = (0, u.hotKeySerialize)({
                    keys: [k, M],
                    text: "{0} + {1}"
                }),
                H = (0, u.hotKeySerialize)({
                    keys: [k, C],
                    text: "{0} + {1}"
                }),
                W = (0, u.hotKeySerialize)({
                    keys: [E, f, y],
                    text: "{0} + {1} + {2}"
                }),
                D = l.t(null, void 0, i(47602)),
                B = l.t(null, void 0, i(61311)),
                P = l.t(null, void 0, i(56470)),
                z = l.t(null, void 0, i(48293)),
                I = l.t(null, void 0, i(40653)),
                N = l.t(null, void 0, i(35809)),
                O = l.t(null, void 0, i(34301)),
                F = l.t(null, void 0, i(26721)),
                R = `<div class="control-bar-wrapper">\n\t<div class="control-bar control-bar--hidden">\n\t\t<div class="control-bar__group js-btn-group js-btn-group-zoom">\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-out apply-common-tooltip" title="${D}" data-tooltip-hotkey="${H}">\n\t\t\t\t${_}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--zoom-in apply-common-tooltip" title="${B}" data-tooltip-hotkey="${L}">\n\t\t\t\t${m}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-maximize">\n\t\t\t<div class="control-bar__btn control-bar__btn--maximize apply-common-tooltip" title="${P}" data-tooltip-hotkey="${A}">\n\t\t\t\t${v}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--minimize js-hidden apply-common-tooltip" title="${z}" data-tooltip-hotkey="${A}">\n\t\t\t\t${b}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-scroll">\n\t\t\t<div class="control-bar__btn control-bar__btn--move-left apply-common-tooltip" title="${I}" data-tooltip-hotkey="${T}">\n\t\t\t\t${p}\n\t\t\t</div>\n\t\t\t<div class="control-bar__btn control-bar__btn--move-right apply-common-tooltip" title="${N}" data-tooltip-hotkey="${x}">\n\t\t\t\t${p}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="control-bar__group js-btn-group js-btn-group-reset-scale">\n\t\t\t<div class="control-bar__btn control-bar__btn--turn-button control-bar__btn--btn-hidden apply-common-tooltip js-btn-reset" title="${O}" data-tooltip-hotkey="${V}">\n\t\t\t\t${g}\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>`,
                G = `<div class="control-bar control-bar__btn control-bar__btn--back-present control-bar__btn--btn-hidden apply-common-tooltip" title="${F}" data-tooltip-hotkey="${W}">\n\t${w}\n</div>`,
                U = h.CheckMobile.any(),
                j = "control-bar__btn--btn-hidden",
                $ = {
                    zoomInOut: !0,
                    maximize: !0,
                    scrollLeftRight: !0,
                    resetScale: !0,
                    goToRealtime: !0
                };
            class Y {
                constructor(t, e, i) {
                    this._widget = (0, s.ensureNotNull)((0, d.parseHtml)(R).querySelector(".control-bar-wrapper")), this._controlBar = (0, s.ensureNotNull)(this._widget.querySelector(".control-bar")), this._back = (0, s.ensureNotNull)((0, d.parseHtml)(G).querySelector(".control-bar__btn--back-present")), this._btnGroups = Array.from(this._controlBar.querySelectorAll(".js-btn-group")), this._backButtonVisible = !1, this._boundMouseHandler = null, this._chartModel = null, this._checkIntervalId = 0, this._controlBarVisible = !1, this._priceAxisChanged = null, this._resetAvailabilityChanged = null, this._priceAxisName = "right", this._rafId = 0, this._visibilityTypeProperty = null, this._boundUpdateMaximizeButtonsVisibility = this._updateMaximizeButtonsVisibility.bind(this), this._boundToggleFullscreenButtons = this._toggleFullscreenButtons.bind(this), this._paneWidth = 0, this._leftPriceScaleWidth = 0, this._rightPriceScaleWidth = 0, this._chart = t, this._parent = e,
                        this._options = Object.assign({}, $, i), this._visibilityPrioritizedGroups = this._initGroupDescriptions(), this._init(), this._initHandlers(), this.updatePosition()
                }
                destroy() {
                    if (null !== this._visibilityTypeProperty && (this._visibilityTypeProperty.unsubscribe(this, this._onVisibilityTypeChange), this._visibilityTypeProperty = null), null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null), null !== this._priceAxisChanged && (this._priceAxisChanged.unsubscribe(this, this._updateBackBtnPosition), this._priceAxisChanged = null), clearInterval(this._checkIntervalId), null !== this._resetAvailabilityChanged) {
                        this._resetAvailabilityChanged.unsubscribe(this, this._updateResetScalesButtonVisibility);
                        const t = this._chart.getResizerDetacher();
                        t.fullscreenable.unsubscribe(this._boundUpdateMaximizeButtonsVisibility), t.fullscreen.unsubscribe(this._boundToggleFullscreenButtons), this._resetAvailabilityChanged = null
                    }
                    this._chart = null
                }
                updatePosition() {
                    const t = this._chart.paneWidgets();
                    if (0 === t.length) return;
                    this._paneWidth = t[0].width(), this._leftPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("left"), this._rightPriceScaleWidth = this._chart.getPriceAxisMaxWidthByName("right");
                    const e = this._chart.timeAxisHeight() + this._bottomMargin();
                    this._widget.style.bottom = `${e}px`, this._back.style.bottom = `${e}px`, this._updateBtnGroupVisibility()
                }
                _bottomMargin() {
                    var t;
                    const e = this._chart.paneWidgets();
                    return (null !== (t = this._chart.maximizedPaneWidget()) && void 0 !== t ? t : e[e.length - 1]).containsMainSeries() ? 32 : 5
                }
                _init() {
                    if (h.CheckMobile.any())
                        for (const t of this._btnGroups) t.classList.add("js-hidden");
                    this._buttons = {
                        zoomIn: this._widget.querySelector(".control-bar__btn--zoom-in"),
                        zoomOut: this._widget.querySelector(".control-bar__btn--zoom-out"),
                        moveLeft: this._widget.querySelector(".control-bar__btn--move-left"),
                        moveRight: this._widget.querySelector(".control-bar__btn--move-right"),
                        turn: this._widget.querySelector(".control-bar__btn--turn-button"),
                        maximize: this._widget.querySelector(".control-bar__btn--maximize"),
                        minimize: this._widget.querySelector(".control-bar__btn--minimize")
                    }, this._initVisibility(), this._parent.appendChild(this._widget), this._parent.appendChild(this._back), this._backButtonVisible = !1, this._priceAxisName = (0, r.isRtl)() ? "left" : "right", this._chart.withModel(this, (() => {
                        this._chartModel = this._chart.model(), this._priceAxisChanged = this._chart.getPriceAxisWidthChangedByName(this._priceAxisName), this._resetAvailabilityChanged = this._chartModel.model().isScalesResetAvailableChanged(), this._priceAxisChanged.subscribe(this, this._updateBackBtnPosition), this._resetAvailabilityChanged.subscribe(this, this._updateResetScalesButtonVisibility);
                        const t = this._chart.getResizerDetacher();
                        t.fullscreenable.subscribe(this._boundUpdateMaximizeButtonsVisibility), t.fullscreen.subscribe(this._boundToggleFullscreenButtons), this._updateMaximizeButtonsVisibility(), this._updateBackBtnPosition(), this._back.addEventListener("click", (() => {
                            null !== this._chartModel && this._chartModel.timeScale().scrollToRealtime(!0)
                        })), this._checkIntervalId = setInterval((() => this._check()), 1e3)
                    }))
                }
                _initHandlers() {
                    const t = o.mobiletouch ? "touchstart" : "mousedown",
                        e = o.mobiletouch ? ["touchend"] : ["mouseup", "mouseout"];
                    this._buttons.moveLeft.addEventListener(t, (t => {
                        t.preventDefault(), this._chart.scrollHelper().moveByBar(1), this._trackEvent("Move Left")
                    })), this._buttons.moveRight.addEventListener(t, (t => {
                        t.preventDefault(), this._chart.scrollHelper().moveByBar(-1), this._trackEvent("Move Right")
                    }));
                    for (const t of e) this._buttons.moveLeft.addEventListener(t, (() => this._chart.scrollHelper().stopMoveByBar())), this._buttons.moveRight.addEventListener(t, (() => this._chart.scrollHelper().stopMoveByBar()));
                    this._buttons.turn.addEventListener("click", (t => {
                        t.preventDefault(), this._chart.GUIResetScales(), this._trackEvent("Reset to Default Settings")
                    })), this._buttons.zoomOut.addEventListener("click", (t => {
                        t.preventDefault(), null !== this._chartModel && this._chartModel.zoomOut(), this._trackEvent("Zoom Out")
                    })), this._buttons.zoomIn.addEventListener("click", (t => {
                        t.preventDefault(), null !== this._chartModel && this._chartModel.zoomIn(), this._trackEvent("Zoom In")
                    })), this._buttons.maximize.addEventListener("click", (t => {
                        t.preventDefault(), this._chart.setActive(!0), this._chart.getResizerDetacher().requestFullscreen(), this._trackEvent(" Maximize Chart")
                    })), this._buttons.minimize.addEventListener("click", (t => {
                        t.preventDefault(), this._chart.getResizerDetacher().exitFullscreen(), this._trackEvent(" Restore Chart")
                    }));
                    const i = t => t.addEventListener("contextmenu", (t => t.preventDefault()));
                    i(this._buttons.moveLeft), i(this._buttons.moveRight), i(this._buttons.turn), i(this._buttons.zoomOut), i(this._buttons.zoomIn), i(this._buttons.minimize), i(this._buttons.maximize)
                }
                _initGroupDescriptions() {
                    return [{
                        shouldBeHiddenOnMobile: !1,
                        available: this._isMaximizeButtonAvailable.bind(this),
                        className: "js-btn-group-maximize",
                        element: this._getBtnGroup("js-btn-group-maximize"),
                        totalWidth: 50
                    }, {
                        shouldBeHiddenOnMobile: !1,
                        available: () => this._options.resetScale,
                        className: "js-btn-group-reset-scale",
                        element: this._getBtnGroup("js-btn-group-reset-scale"),
                        totalWidth: 50
                    }, {
                        shouldBeHiddenOnMobile: !n.enabled("show_zoom_and_move_buttons_on_touch"),
                        available: () => this._options.zoomInOut,
                        className: "js-btn-group-zoom",
                        element: this._getBtnGroup("js-btn-group-zoom"),
                        totalWidth: 86
                    }, {
                        shouldBeHiddenOnMobile: !n.enabled("show_zoom_and_move_buttons_on_touch"),
                        available: () => this._options.scrollLeftRight,
                        className: "js-btn-group-scroll",
                        element: this._getBtnGroup("js-btn-group-scroll"),
                        totalWidth: 86
                    }]
                }
                _check() {
                    if (null === this._chartModel || !this._options.goToRealtime) return;
                    const t = this._chartModel.timeScale().rightOffset() < 0;
                    t !== this._backButtonVisible && (this._backButtonVisible = t, this._back.classList.toggle(j, !this._backButtonVisible))
                }
                _initVisibility() {
                    this._visibilityTypeProperty = (0, a.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, this._onVisibilityTypeChange), this._onVisibilityTypeChange()
                }
                _onVisibilityTypeChange() {
                    if (null === this._visibilityTypeProperty) return;
                    const t = this._visibilityTypeProperty.value();
                    "alwaysOn" === t || "alwaysOff" === t ? (this._controlBarVisible = "alwaysOn" === t, null !== this._boundMouseHandler && (this._parent.removeEventListener("mousemove", this._boundMouseHandler, !1), this._parent.removeEventListener("mouseleave", this._boundMouseHandler, !1), this._boundMouseHandler = null)) : (this._controlBarVisible = !1, this._boundMouseHandler || (this._boundMouseHandler = this._visibilityMouseHandler.bind(this), this._parent.addEventListener("mousemove", this._boundMouseHandler), this._parent.addEventListener("mouseleave", this._boundMouseHandler))), this._updateControlBarVisibility()
                }
                _visibilityMouseHandler(t) {
                    if (t.buttons) return;
                    if (null !== this._chartModel && this._chartModel.lineBeingCreated()) return;
                    let e = "mouseleave" !== t.type;
                    if ("mousemove" === t.type) {
                        const i = this._widget.getBoundingClientRect(),
                            s = 100 - this._bottomMargin();
                        e = t.clientX >= i.left - 100 && t.clientX <= i.right + 100 && t.clientY >= i.top - s && t.clientY <= i.bottom + 100
                    }
                    this._controlBarVisible !== e && (this._controlBarVisible = e, null === this._rafId && (this._rafId = this._controlBar.ownerDocument.defaultView.requestAnimationFrame(this._updateControlBarVisibility.bind(this))))
                }
                _updateControlBarVisibility() {
                    this._rafId = null, this._controlBar.classList.toggle("control-bar--hidden", !this._controlBarVisible)
                }
                _updateBackBtnPosition() {
                    if ("left" === this._priceAxisName || "right" === this._priceAxisName) {
                        const t = this._chart.getPriceAxisMaxWidthByName(this._priceAxisName) + 14;
                        t && (this._back.style.marginRight = `${t}px`)
                    }
                }
                _updateBtnGroupVisibility() {
                    const t = this._leftPriceScaleWidth + this._paneWidth,
                        e = (t + this._rightPriceScaleWidth) / 2;
                    let i = 2 * Math.min(t - e, e - this._leftPriceScaleWidth) - 50 - 50,
                        s = !1;
                    for (const t of this._visibilityPrioritizedGroups) {
                        t.enoughSpaceForGroup = !1;
                        t.available() && (!U || !t.shouldBeHiddenOnMobile) && (i -= t.totalWidth, t.enoughSpaceForGroup = i >= 0 && !s, s = s || !t.enoughSpaceForGroup), !t.enoughSpaceForGroup !== t.element.classList.contains("js-hidden") && t.element.classList.toggle("js-hidden", !t.enoughSpaceForGroup)
                    }
                    this._updateControlBarPosition()
                }
                _getBtnGroup(t) {
                    return (0, s.ensureDefined)(this._btnGroups.find((e => e.classList.contains(t))))
                }
                _updateControlBarPosition() {
                    const t = this._visibilityPrioritizedGroups.reduce(((t, e) => t + (e.enoughSpaceForGroup ? e.totalWidth : 0)), 0),
                        e = (this._paneWidth + this._leftPriceScaleWidth + this._rightPriceScaleWidth) / 2 - Math.ceil(t / 2);
                    this._widget.style.left = `${e}px`
                }
                _updateResetScalesButtonVisibility() {
                    if (null === this._chartModel) return;
                    const t = this._chartModel.model().isScalesResetAvailable();
                    this._buttons.turn.classList.toggle(j, !t)
                }
                _updateMaximizeButtonsVisibility() {
                    this._updateBtnGroupVisibility()
                }
                _toggleFullscreenButtons() {
                    const t = this._chart.inFullscreen();
                    this._buttons.maximize.classList.toggle("js-hidden", t), this._buttons.minimize.classList.toggle("js-hidden", !t)
                }
                _isMaximizeButtonAvailable() {
                    return this._options.maximize, !1
                }
                _trackEvent(t) {
                    0
                }
            }
        },
        44449: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                LegendWidget: () => rl
            });
            var s = i(27714),
                l = i(50151),
                o = i(58275),
                n = i.n(o),
                a = i(1722),
                r = i(24377),
                d = i(14483),
                u = i(49483),
                h = i(65616),
                c = i(59255),
                _ = i(34926),
                p = i(42184),
                m = i(80007),
                g = i(7488);
            var v = i(34362);
            class b extends class {
                constructor(t, e = {}) {
                    this._loadingEl = document.createElement("span"), this._renderLoading(e), this.toggleVisibility(!1), t.appendChild(this._loadingEl)
                }
                toggleVisibility(t) {
                    this._loadingEl.classList.toggle(g.blockHidden, !t)
                }
                _renderLoading(t) {
                    const {
                        className: e
                    } = t;
                    e && this._loadingEl.classList.add(e)
                }
            } {
                _renderLoading(t) {
                    super._renderLoading(t), this._loadingEl.innerHTML = `\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t\t<span class="${v.loaderItem}"></span>\n\t\t`, this._loadingEl.classList.add(v.loader)
                }
            }

            function w(t, e) {
                null === t.firstChild ? t.textContent = e : t.firstChild.nodeValue = e
            }
            var S = i(77539);
            const y = u.CheckMobile.any();
            class M {
                constructor(t, e, i) {
                    this._el = null, this._firstBlockWrapper = null, this._titleParentEl = null, this._titleElements = [], this._valuesParentEl = null, this._valuesAdditionalWrapperEl = null, this._valuesElements = [], this._actionsParentEl = null, this._actionAdditionalWrapperEl = null, this._stayInHoveredMode = !1, this._mode = 4, this._statusesWrapper = null, this._resizeObserver = null, this._hideInvisibleHover = null, this._hideValues = null, this._allButtonsWidth = null, this._lastStatusesWrapperWidth = null, this._lastActionsWrapperWidth = null, this._showActionsHandler = null, this._hideActionsHandler = null, this._selectedSourceHandler = null, this._mouseEventHandlers = [], this._disableTimeout = null, this._loader = null, this._updateDisabledState = (t = this._disabled.value()) => {
                        null !== this._el && (this._el.classList.toggle(S.disabled, t), this._updateLoadingState(), this._updateStatusWidgetVisibility(t), this._updateTitleMaxWidth())
                    }, this._updateLoadingState = (t = this._loading.value()) => {
                        if (null !== this._el) {
                            const e = this._el.classList;
                            e.toggle(S.eyeLoading, t && !this._disabled.value()), e.toggle(S.loading, t)
                        }
                        null !== this._loader && this._loader.toggleVisibility(t)
                    }, this._model = t, this._parentEl = e, this._disabled = this._model.disabled().spawn(), this._disabled.subscribe(this._updateDisabledState), this._disabledOnInterval = this._model.disabledOnInterval().spawn(), this._disabledOnInterval.subscribe(this._updateDisabledOnIntervalState.bind(this)), this._selected = this._model.selected().spawn(), this._selected.subscribe(this._updateSelectedState.bind(this)), this._loading = this._model.loading().spawn(), this._loading.subscribe(function (t, e) {
                        let i = 0;
                        return s => {
                            clearTimeout(i), s ? t() : i = setTimeout(t, e)
                        }
                    }(this._updateLoadingState, 700)), this._isTitleHidden = this._model.isTitleHidden().spawn(), this._isValuesHidden = this._model.isValuesHidden().spawn(), this._isRowHidden = this._model.isRowHidden().spawn(), this._isTitleHidden.subscribe(this._updateShowTitles.bind(this)), this._isValuesHidden.subscribe(this._updateShowValues.bind(this)), this._isRowHidden.subscribe(this._updateShowLine.bind(this)), this._createTitlesSpawns();
                    for (let t = 0; t < this._titlesSpawns.length; t++) this._titlesSpawns[t].title.subscribe(this._updateTitlesHandler.bind(this, t));
                    this._values = this._model.values().spawn(), this._values.subscribe(this._updateValues.bind(this)), this._createValuesSpawns(), this._addValuesSpawnsSubscriptions(), this._actionsSpawnArray = this._model.actions().map((t => ({
                        visible: t.visible.spawn(),
                        title: void 0 === t.title ? null : t.title.spawn()
                    })));
                    for (let t = 0; t < this._actionsSpawnArray.length; t++) {
                        this._actionsSpawnArray[t].visible.subscribe(this._updateActionVisibilities.bind(this, t));
                        const e = this._actionsSpawnArray[t].title;
                        null !== e && e.subscribe(this._updateActionTitle.bind(this, t))
                    }
                    this._withActions = i.withActions, this._render(), this._updateStates(), this._updateShowTitles(), this._updateShowValues(), this._updateShowLine(), null !== this._valuesParentEl && (this._loader = new b(this._valuesParentEl, {
                        className: S.loader
                    })), this._customTextColor = i.customTextColor.spawn(), this._customTextColor.subscribe(this._updateCustomTextColor.bind(this)), this._updateCustomTextColor(), this._withActions && (this._showActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._showActions.bind(this)), this._hideActionsHandler = (0, m.wrapHandlerWithPreventEvent)(this._hideActions.bind(this)), this._selectedSourceHandler = (0, m.wrapHandlerWithPreventEvent)(this._model.setSourceSelected.bind(this._model)), null !== this._titleParentEl && (this._titleParentEl.addEventListener("touchend", this._selectedSourceHandler), this._titleParentEl.addEventListener("mousedown", this._selectedSourceHandler), y || (this._titleParentEl.addEventListener("mouseenter", this._showActionsHandler), this._titleParentEl.addEventListener("mouseleave", this._hideActionsHandler)), this._mouseEventHandlers.push(new p.MouseEventHandler(this._titleParentEl, {
                        mouseDoubleClickEvent: this._model.onShowSettings.bind(this._model),
                        doubleTapEvent: this._model.onShowSettings.bind(this._model)
                    }))), null === this._actionAdditionalWrapperEl || null === this._actionsParentEl || y || (this._actionAdditionalWrapperEl.addEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.addEventListener("mouseleave", this._hideActionsHandler), this._actionsParentEl.addEventListener("contextmenu", (t => {
                        t.preventDefault(), t.stopPropagation()
                    }))))
                }
                destroy() {
                    var t, e;
                    this._disabled.destroy(), this._disabledOnInterval.destroy(), this._selected.destroy(), this._loading.destroy(), this._isTitleHidden.destroy(), this._isValuesHidden.destroy(), this._isRowHidden.destroy(), this._customTextColor.destroy(), null !== this._disableTimeout && clearTimeout(this._disableTimeout);
                    for (const t of this._titlesSpawns) t.title.destroy();
                    if (null !== this._titleParentEl) {
                        for (const t of this._mouseEventHandlers) t.destroy();
                        this._titleElements = [], this._withActions && null !== this._selectedSourceHandler && null !== this._showActionsHandler && null !== this._hideActionsHandler && (this._titleParentEl.removeEventListener("touchend", this._selectedSourceHandler), this._titleParentEl.removeEventListener("mousedown", this._selectedSourceHandler), y || (this._titleParentEl.removeEventListener("mouseenter", this._showActionsHandler), this._titleParentEl.removeEventListener("mouseleave", this._hideActionsHandler))), this._titleParentEl = null
                    }
                    for (const t of this._actionsSpawnArray) {
                        t.visible.destroy();
                        const e = t.title;
                        null !== e && e.destroy()
                    }
                    if (null !== this._actionAdditionalWrapperEl && (this._withActions && null !== this._showActionsHandler && null !== this._hideActionsHandler && !y && (this._actionAdditionalWrapperEl.removeEventListener("mouseenter", this._showActionsHandler), this._actionAdditionalWrapperEl.removeEventListener("mouseleave", this._hideActionsHandler)), this._actionAdditionalWrapperEl = null), this._actionsParentEl = null, this._removeValuesSpawnsSubscriptions(), this._values.destroy(), null !== this._valuesParentEl && (this._valuesElements = [], this._valuesParentEl = null), null === (t = this._hideInvisibleHover) || void 0 === t || t.destroy(), null === (e = this._hideValues) || void 0 === e || e.destroy(), null !== this._resizeObserver && (this._resizeObserver.disconnect(), this._resizeObserver = null), null !== this._el) {
                        (0, l.ensureNotNull)(this._el.parentNode).removeChild(this._el), this._el = null
                    }
                }
                getHeight() {
                    return null === this._el ? null : 24
                }
                updateMode(t) {
                    this._mode === t && null !== this._allButtonsWidth || (this._mode = t, this._updateAllButtonsWidth())
                }
                _render() {
                    this._renderTitle(), this._renderActions(), this._renderValues(), this._el = document.createElement("div"), this._firstBlockWrapper = document.createElement("div"), this._firstBlockWrapper.classList.add(S.noWrapWrapper), this._firstBlockWrapper.appendChild((0, l.ensureNotNull)(this._titleParentEl)), null !== this._actionsParentEl && this._firstBlockWrapper.appendChild(this._actionsParentEl), this._el.appendChild(this._firstBlockWrapper), this._el.appendChild((0, l.ensureNotNull)(this._valuesParentEl)), this._parentEl.append(this._el)
                }
                _renderTitle() {
                    var t;
                    null === this._titleParentEl && (this._titleParentEl = document.createElement("div"), this._titleParentEl.classList.add(S.titleWrapper));
                    const e = this._titleParentEl;
                    for (let i = 0; i < this._titlesSpawns.length; i++) {
                        const s = null !== (t = this._titlesSpawns[i].title.value()) && void 0 !== t ? t : "",
                            l = this._titlesSpawns[i].class,
                            o = document.createElement("div");
                        o.classList.add(S.title, l, "apply-overflow-tooltip"), o.dataset.name = "legend-source-title", s.length > 0 ? (o.appendChild(document.createTextNode(s)), o.classList.add(S.withDot)) : o.classList.add(g.blockHidden), e.appendChild(o), this._titleElements.push(o)
                    }
                }
                _renderActions() {
                    if (!this._withActions) return;
                    null === this._actionsParentEl && (this._actionsParentEl = document.createElement("div"), this._actionsParentEl.classList.add(S.buttonsWrapper), this._parentEl.append(this._actionsParentEl), this._actionAdditionalWrapperEl = document.createElement("div"), this._actionAdditionalWrapperEl.classList.add(S.buttons), this._actionsParentEl.appendChild(this._actionAdditionalWrapperEl));
                    const t = (0, l.ensureNotNull)(this._actionAdditionalWrapperEl),
                        e = h.trackingModeIsAvailable ? "large" : "small";
                    for (const i of this._model.actions()) {
                        const s = (0, _.createActionElement)(i, S.button, S.buttonIcon, g.blockHidden, e);
                        t.appendChild(s)
                    }
                }
                _isWidthButtonsMode() {
                    return null !== this._el && (this._el.classList.contains(S.withAction) || this._disabled.value() || this._selected.value() || this._stayInHoveredMode)
                }
                _updateTitlesHandler(t, e) {
                    const i = (0,
                            l.ensureNotNull)(this._titleElements[t]),
                        s = 0 === e.length;
                    i.classList.toggle(g.blockHidden, s), i.classList.toggle(S.withDot, !s), w(i, e)
                }
                _updateStates(t) {
                    this._updateDisabledState(), this._updateDisabledOnIntervalState(), this._updateSelectedState(), this._updateLoadingState(), t && this._clearDisableState()
                }
                _updateValuesHTMLElHandler(t, e) {
                    w((0, l.ensure)(this._valuesElements[t].value), e), this._updateShowValues()
                }
                _updateValueColorHandler(t, e = "") {
                    (0, l.ensure)(this._valuesElements[t].value).style.color = e
                }
                _updateValueVisibleHandler(t, e) {
                    const i = (0, l.ensure)(this._valuesElements[t].value).closest(`.${S.valueItem}`);
                    null !== i && i.classList.toggle(g.blockHidden, !e)
                }
                _updateShowLine() {
                    null !== this._el && this._el.classList.toggle(g.blockHidden, this._isRowHidden.value())
                }
                _createValuesSpawns() {
                    this._valuesSpawnArray = this._values.value().map((t => ({
                        value: t.value.spawn(),
                        color: t.color.spawn(),
                        visible: t.visible.spawn(),
                        title: t.title.spawn()
                    })))
                }
                _removeValuesSpawnsSubscriptions() {
                    for (const t of this._valuesSpawnArray) t.value.destroy(), t.color.destroy(), t.visible.destroy(), t.title.destroy();
                    this._valuesSpawnArray = []
                }
                _addValuesSpawnsSubscriptions() {
                    for (let t = 0; t < this._valuesSpawnArray.length; t++) {
                        const e = this._valuesSpawnArray[t];
                        e.value.subscribe(this._updateValuesHTMLElHandler.bind(this, t)), e.color.subscribe(this._updateValueColorHandler.bind(this, t)), e.visible.subscribe(this._updateValueVisibleHandler.bind(this, t)), e.title.subscribe(this._updateValuesTitleHTMLElHandler.bind(this, t))
                    }
                }
                _updateShowValues() {
                    null !== this._valuesAdditionalWrapperEl && this._valuesAdditionalWrapperEl.classList.toggle(g.blockHidden, this._isValuesShouldBeHidden())
                }
                _isValuesShouldBeHidden() {
                    return !this._valuesSpawnArray.some((t => t.value.value().length > 0))
                }
                _addStatusesWidget(t, e, i) {
                    this._statusesWrapper = document.createElement("div"), this._statusesWrapper.classList.add(S.statusesWrapper), this._statusesWrapper.appendChild(t), (0, l.ensureNotNull)(this._firstBlockWrapper).appendChild(this._statusesWrapper), this._hideInvisibleHover = e.spawn(), this._hideInvisibleHover.subscribe(this._updateInvisibleHoverMode.bind(this), {
                        callWithLast: !0
                    }), this._hideValues = i.spawn(), this._hideValues.subscribe(this._updateHideValuesMode.bind(this), {
                        callWithLast: !0
                    }), this._updateStatusWidgetVisibility(this._disabled.value()), this._resizeObserver = new c.default(this._handlerRestrictTitleWidth.bind(this)), null !== this._actionsParentEl && this._resizeObserver.observe(this._actionsParentEl), this._resizeObserver.observe(this._statusesWrapper)
                }
                _updateTitleMaxWidth() {
                    if (null === this._firstBlockWrapper) return;
                    const t = this._allButtonsWidth || 0,
                        e = (this._lastActionsWrapperWidth || 0) + (this._lastStatusesWrapperWidth || 0);
                    this._isWidthButtonsMode() ? this._firstBlockWrapper.style.maxWidth = `calc(100% - ${Math.max(t,e)}px)` : this._firstBlockWrapper.style.maxWidth = e > 0 ? `calc(100% - ${e}px)` : ""
                }
                _updateAllButtonsWidth() {
                    this._allButtonsWidth = this._getButtonsCount() * O + 1, this._updateTitleMaxWidth()
                }
                _updateInvisibleHoverMode(t) {
                    null !== this._el && this._el.classList.toggle(S.invisibleHover, !t)
                }
                _updateHideValuesMode(t) {
                    null !== this._el && this._el.classList.toggle(S.hideValues, t)
                }
                _showActions() {
                    if (null === this._el || !this._withActions) return;
                    this._el.classList.add(S.withAction);
                    const t = null !== this._valuesParentEl && null !== this._titleParentEl && this._valuesParentEl.offsetTop === this._titleParentEl.offsetTop;
                    this._el.classList.toggle(S.withTail, t), this._updateTitleMaxWidth()
                }
                _hideActions() {
                    null !== this._el && this._withActions && !this._stayInHoveredMode && (this._el.classList.remove(S.withAction), null !== this._valuesParentEl && this._valuesParentEl.classList.remove(S.withTail), this._updateTitleMaxWidth())
                }
                _handlerRestrictTitleWidth(t) {
                    if (null === this._actionsParentEl || null === this._firstBlockWrapper) return;
                    let e = null,
                        i = null;
                    for (const s of t) s.target === this._statusesWrapper && (e = s.contentRect.width), s.target === this._actionsParentEl && (i = s.contentRect.width);
                    e === this._lastStatusesWrapperWidth && i === this._lastActionsWrapperWidth || (null !== e && (this._lastStatusesWrapperWidth = e), null !== i && (this._lastActionsWrapperWidth = i), this._updateTitleMaxWidth())
                }
                _clearDisableState() {
                    null !== this._el && (this._el.classList.remove(S.eyeLoading), this._el.classList.remove(S.disabled), this._updateStatusWidgetVisibility(this._disabled.value()), this._updateTitleMaxWidth())
                }
                _updateDisabledOnIntervalState() {
                    var t;
                    null === (t = this._el) || void 0 === t || t.classList.toggle(S.disabledOnInterval, this._disabledOnInterval.value())
                }
                _updateSelectedState() {
                    null !== this._el && this._withActions && this._el.classList.toggle(S.selected, this._selected.value())
                }
                _updateShowTitles() {
                    null !== this._titleParentEl && (this._titleParentEl.classList.toggle(g.blockHidden, this._isTitleHidden.value()), null !== this._actionsParentEl && this._actionsParentEl.classList.toggle(g.blockHidden, this._isTitleHidden.value()))
                }
                _updateValues() {
                    this._removeValuesSpawnsSubscriptions(), this._createValuesSpawns(), null !== this._valuesParentEl && null !== this._valuesAdditionalWrapperEl && (this._valuesElements = [], this._valuesAdditionalWrapperEl.innerHTML = ""), this._renderValues(), this._addValuesSpawnsSubscriptions(), this._updateShowValues()
                }
                _updateActionVisibilities(t) {
                    null !== this._actionsParentEl && this._actionsParentEl.querySelectorAll(`.${S.button}`)[t].classList.toggle(g.blockHidden, !this._actionsSpawnArray[t].visible.value())
                }
                _updateActionTitle(t) {
                    const e = this._actionsSpawnArray[t].title;
                    null !== this._actionsParentEl && null !== e && this._actionsParentEl.querySelectorAll(`.${S.button}`)[t].setAttribute("title", e.value())
                }
                _updateCustomTextColor() {
                    const t = this._customTextColor.value() || "";
                    for (const e of this._titleElements) null !== e && (e.style.color = t);
                    const e = (0, l.ensureNotNull)(this._valuesParentEl).querySelectorAll(`.${S.valueTitle}`);
                    for (let i = 0; i < e.length; i++) e[i].style.color = t;
                    (0, l.ensureNotNull)(this._el).classList.toggle(S.withCustomTextColor, Boolean(t))
                }
                _updateStatusWidgetVisibility(t) {
                    null !== this._statusesWrapper && this._statusesWrapper.classList.toggle(g.blockHidden, t)
                }
            }
            class C extends M {
                constructor(t, e, i) {
                    super(t, e, i), this._clientHeight = null, this._updateLinkedState = void 0, this._flagged = this._model.flagged().spawn(),
                        this._flagged.subscribe(this._updateFlaggedState.bind(this)), this._updateStates(), i.statusWidgetEl && this._addStatusesWidget(i.statusWidgetEl, i.hideInvisibleHover, i.hideValues), this._selected.subscribe(this._updateTitleMaxWidth.bind(this))
                }
                destroy() {
                    super.destroy(), void 0 !== this._flagged && this._flagged.destroy()
                }
                getHeight() {
                    return null === this._el ? null : (null === this._clientHeight && (this._clientHeight = this._el.clientHeight, 0 === this._clientHeight && (this._clientHeight = null)), this._clientHeight)
                }
                _getButtonsCount() {
                    return 1 === this._mode ? 1 : 3
                }
                _render() {
                    super._render();
                    const t = (0, l.ensureNotNull)(this._el);
                    t.classList.add(S.item, S.series), t.classList.toggle(S.onlyOneButtonCanBeStick, this._model.isOneButtonCanBeStick()), t.dataset.name = "legend-series-item"
                }
                _updateStates() {
                    super._updateStates(), this._updateFlaggedState()
                }
                _renderValues() {
                    null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(S.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(S.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
                    const t = (0, l.ensureNotNull)(this._valuesAdditionalWrapperEl),
                        e = this._values.value();
                    for (const i of e) {
                        const e = document.createElement("div");
                        e.classList.add(S.valueItem), e.classList.toggle(g.blockHidden, !i.visible.value()), e.classList.toggle(S.unimportant, i.unimportant.value());
                        const s = document.createElement("div"),
                            l = i.title.value() || "";
                        s.classList.add(S.valueTitle), s.classList.toggle(g.blockHidden, 0 === l.length), s.appendChild(document.createTextNode(l)), e.appendChild(s);
                        const o = document.createElement("div");
                        o.classList.add(S.valueValue), o.style.color = i.color.value() || "", o.appendChild(document.createTextNode(i.value.value())), e.appendChild(o), this._valuesElements.push({
                            title: s,
                            value: o
                        }), t.appendChild(e)
                    }
                }
                _createTitlesSpawns() {
                    const t = this._model.titles();
                    this._titlesSpawns = [{
                        title: t.title.spawn(),
                        class: S.mainTitle
                    }, {
                        title: t.description.spawn(),
                        class: S.descTitle
                    }, {
                        title: t.interval.spawn(),
                        class: S.intervalTitle
                    }, {
                        title: t.provider.spawn(),
                        class: S.providerTitle
                    }, {
                        title: t.exchange.spawn(),
                        class: S.exchangeTitle
                    }, {
                        title: t.chartStyle.spawn(),
                        class: S.styleTitle
                    }, {
                        title: t.priceSource.spawn(),
                        class: S.styleTitle
                    }]
                }
                _isValuesShouldBeHidden() {
                    return !this._valuesSpawnArray.some((t => t.value.value().length > 0 || (t.title.value() || "").length > 0))
                }
                _updateValuesTitleHTMLElHandler(t, e = "") {
                    const i = (0, l.ensure)(this._valuesElements[t].title);
                    w(i, e), i.classList.toggle(g.blockHidden, 0 === e.length), this._updateShowValues()
                }
                _isWidthButtonsMode() {
                    var t;
                    return null !== this._el && (void 0 !== this._flagged && Boolean(this._flagged.value()) || (null === (t = this._linked) || void 0 === t ? void 0 : t.value()) || super._isWidthButtonsMode())
                }
                _updateFlaggedState() {
                    if (void 0 === this._flagged) return;
                    (0, l.ensureNotNull)(this._el).classList.toggle(S.flagged, Boolean(this._flagged.value())), this._updateTitleMaxWidth()
                }
            }
            const E = u.isSafari ? "click" : "auxclick";
            class f extends M {
                constructor(t, e, i) {
                    super(t, e, i), this._wheelClickHandler = null,
                        this._canUpdateRowVisibility = !0, this._globalRowVisibility = this._model.globalVisibility().spawn(), this._globalRowVisibility.subscribe(this._updateShowLine.bind(this), {
                            callWithLast: !0
                        }), this._has5Buttons = this._model.isPineScriptDataSource().spawn(), this._has5Buttons.subscribe(this._update5ButtonsStyles.bind(this)), this._updateStates(!this._disabled.value()), i.statusWidgetEl && this._addStatusesWidget(i.statusWidgetEl, i.hideInvisibleHover, i.hideValues), this._selected.subscribe(this._updateTitleMaxWidth.bind(this)), i.withActions && (this._wheelClickHandler = this._onWheelClicked.bind(this), null !== this._titleParentEl && this._titleParentEl.addEventListener(E, this._wheelClickHandler))
                }
                destroy() {
                    super.destroy(), this._has5Buttons.destroy(), this._globalRowVisibility && this._globalRowVisibility.destroy(), null !== this._wheelClickHandler && null !== this._titleParentEl && this._titleParentEl.removeEventListener(E, this._wheelClickHandler)
                }
                _updateShowLine() {
                    if (null === this._el || !this._canUpdateRowVisibility) return;
                    const t = !this._globalRowVisibility.value();
                    t ? this._el.classList.toggle(g.blockHidden, t) : super._updateShowLine()
                }
                _getButtonsCount() {
                    switch (this._mode) {
                        case 4:
                            return this._has5Buttons.value() ? 5 : 4;
                        case 3:
                            return 3;
                        default:
                            return 2
                    }
                }
                _render() {
                    super._render();
                    const t = (0, l.ensureNotNull)(this._el);
                    t.classList.add(S.item, S.study), t.dataset.name = "legend-source-item"
                }
                _createTitlesSpawns() {
                    const t = this._model.titles();
                    this._titlesSpawns = [{
                        title: t.title.spawn(),
                        class: S.mainTitle
                    }, {
                        title: t.args.spawn(),
                        class: S.descTitle
                    }]
                }
                _renderValues() {
                    null === this._valuesParentEl && (this._valuesParentEl = document.createElement("div"), this._valuesParentEl.classList.add(S.valuesWrapper), this._valuesAdditionalWrapperEl = document.createElement("div"), this._valuesAdditionalWrapperEl.classList.add(S.valuesAdditionalWrapper), this._valuesParentEl.appendChild(this._valuesAdditionalWrapperEl));
                    const t = (0, l.ensureNotNull)(this._valuesAdditionalWrapperEl),
                        e = this._values.value();
                    for (const i of e) {
                        const e = document.createElement("div");
                        e.classList.add(S.valueItem), e.classList.toggle(g.blockHidden, !i.visible.value());
                        const s = document.createElement("div");
                        s.classList.add(S.valueValue), s.style.color = i.color.value() || "", s.appendChild(document.createTextNode(i.value.value()));
                        const l = i.title.value();
                        void 0 !== l && (s.classList.add("apply-common-tooltip"), s.title = l), e.appendChild(s), this._valuesElements.push({
                            value: s
                        }), t.appendChild(e)
                    }
                }
                _updateValuesTitleHTMLElHandler(t, e = "") {
                    const i = (0, l.ensure)(this._valuesElements[t].value);
                    i.classList.toggle("apply-common-tooltip", 0 !== e.length), i.title = e
                }
                _update5ButtonsStyles(t) {
                    null !== this._el && (this._el.classList.toggle(S.has5Buttons, t), this._updateAllButtonsWidth())
                }
                _onWheelClicked(t) {
                    1 === t.button && this._model.onRemoveSource()
                }
            }
            var k = i(44352),
                V = i(51768);

            function A(t) {
                (0, V.trackEvent)("GUI", "Legend action", t)
            }
            var T = i(47036),
                x = i(62920),
                L = i(65300),
                H = i(36885);
            const W = k.t(null, void 0, i(21686)),
                D = k.t(null, void 0, i(28705)),
                B = k.t(null, void 0, i(51072));
            class P {
                constructor(t, e, i) {
                    this._el = null, this._counterEl = null, this._arrowIconEL = null, this._objectTreeEl = null,
                        this._mode = 0, this._parentEl = t, this._themedColor = e.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this)), this._sourceCount = i.visibleDataSourceCount.spawn(), this._sourceCount.subscribe(this._updateSourceCount.bind(this)), this._isStateOpen = i.isDataSourcesCollapsed.spawn(), this._isStateOpen.subscribe(this._updateState.bind(this)), this._showObjectsTree = i.showObjectsTree.spawn(), this._showObjectsTree.subscribe(this._updateObjectTreeVisibility.bind(this)), this._render(), this._updateState(), this._updateThemedColor(this._themedColor.value()), this._updateObjectTreeVisibility(this._showObjectsTree.value()), this._toggleStateHandler = (0, m.wrapHandlerWithPreventEvent)(i.onCollapseDataSources), this._showObjectTreeHandler = (0, m.wrapHandlerWithPreventEvent)(i.onShowObjectsTreeDialog), null !== this._el && (this._el.addEventListener("touchend", this._toggleStateHandler), this._el.addEventListener("click", this._toggleStateHandler), this._el.addEventListener("contextmenu", (t => {
                            t.preventDefault(), t.stopPropagation()
                        }))), null !== this._objectTreeEl && (this._objectTreeEl.addEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.addEventListener("click", this._showObjectTreeHandler))
                }
                destroy() {
                    this._sourceCount.destroy(), this._isStateOpen.destroy(), null !== this._objectTreeEl && (this._objectTreeEl.removeEventListener("touchend", this._showObjectTreeHandler), this._objectTreeEl.removeEventListener("click", this._showObjectTreeHandler), this._objectTreeEl = null), this._arrowIconEL = null, this._counterEl = null, null !== this._el && (this._el.removeEventListener("touchend", this._toggleStateHandler), this._el.removeEventListener("click", this._toggleStateHandler), this._el.innerHTML = "", this._el = null)
                }
                setMode(t) {
                    this._mode = t ? 1 : 0, this._updateTooltip()
                }
                _render() {
                    this._el = document.createElement("div"), this._el.className = `${S.toggler} apply-common-tooltip`, this._arrowIconEL = document.createElement("div"), this._arrowIconEL.classList.add(S.iconArrow), this._arrowIconEL.innerHTML = h.trackingModeIsAvailable ? x : T, this._el.appendChild(this._arrowIconEL), this._objectTreeEl = document.createElement("div"), this._objectTreeEl.classList.add(S.objectTree), this._objectTreeEl.innerHTML = h.trackingModeIsAvailable ? H : L, this._el.appendChild(this._objectTreeEl), this._counterEl = document.createElement("div"), this._counterEl.classList.add(S.counter), this._counterEl.appendChild(document.createTextNode(String(this._sourceCount.value()))), this._el.appendChild(this._counterEl), this._parentEl.appendChild(this._el)
                }
                _updateThemedColor(t) {
                    if (null !== this._el)
                        if (t.length > 0) {
                            const [e, i, s] = (0, r.parseRgb)(t);
                            this._el.style.backgroundColor = (0, r.rgbaToString)([e, i, s, (0, r.normalizeAlphaComponent)(.8)])
                        } else this._el.style.removeProperty("background-color")
                }
                _updateSourceCount(t) {
                    w((0, l.ensureNotNull)(this._counterEl), String(t));
                    const e = (0, l.ensureNotNull)(this._el),
                        i = t < 1;
                    e.classList.toggle(g.blockHidden, i);
                    const s = 1 === t;
                    e.classList.toggle(S.onlyOneSourceShown, s)
                }
                _updateState() {
                    const t = !this._isStateOpen.value();
                    this._parentEl.classList.toggle(S.closed, t), this._updateTooltip(),
                        A((t ? "Hide" : "Show") + " not main sources")
                }
                _tooltip() {
                    return 1 === this._mode ? B : this._isStateOpen.value() ? W : D
                }
                _updateTooltip() {
                    null !== this._el && this._el.setAttribute("title", this._tooltip())
                }
                _updateObjectTreeVisibility(t) {
                    (0, l.ensureNotNull)(this._el).classList.toggle(S.objectsTreeCanBeShown, t)
                }
            }
            var z = i(38780),
                I = i(27267);

            function N(t, e) {
                const i = new(n())(e(t.value()));
                t.subscribe((t => {
                    i.setValue(e(t))
                }));
                return i.readonly().spawn((() => t.unsubscribe()))
            }
            const O = h.trackingModeIsAvailable ? 44 : 28,
                F = d.enabled("object_tree_legend_mode");
            class R {
                constructor(t, e) {
                    this._renderToggler = null, this._mainDataSourceRenderer = null, this._dataSourceRenderers = [], this._parentEl = document.createElement("div"), this._mainDataSourceEl = null, this._dataSourcesEl = null, this._dataSourcesAdditionalWrapperEl = null, this._collapsedDataSourcesWrapperEl = null, this._collapsedDataSourcesEl = null, this._outsideEventForCollapsedTooltip = null, this._options = t, this._togglerOptions = e, this._isStudiesLegendHidden = t.isStudiesLegendHidden.spawn(), this._isStudiesLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._isAllLegendHidden = t.isAllLegendHidden.spawn(), this._isAllLegendHidden.subscribe(this._updateLegendVisibility.bind(this)), this._updateLegendVisibility(), this._hideAllExceptFirstLine = t.hideAllExceptFirstLine.spawn(), this._hideAllExceptFirstLine.subscribe(this._updateAllHiddenExeptFirstLine.bind(this)), this._themedColor = t.themedColor.spawn(), this._themedColor.subscribe(this._setCustomBg.bind(this)), this._showBackground = t.showBackground.spawn(), this._showBackground.subscribe(this._setCustomBg.bind(this)), this._backgroundTransparency = t.backgroundTransparency.spawn(), this._backgroundTransparency.subscribe(this._setCustomBg.bind(this)), this._collapsedDataSourcesCountSpawn = t.collapsedDataSourcesCount.spawn(), this._collapsedDataSourcesCountSpawn.subscribe(this._updateCollapsedSourcesCount.bind(this)), this._showCollapsedDataSourcesTooltipHandler = this._showCollapsedDataSourcesTooltip.bind(this), this._parentEl.classList.add(S.legend), this._parentEl.classList.toggle(S.noWrap, !h.trackingModeIsAvailable), this._parentEl.classList.toggle(S.noActions, !this._options.withActions), this._parentEl.classList.toggle(S.touchMode, h.trackingModeIsAvailable), this._parentEl.classList.toggle(S.wrappable, !this._hideAllExceptFirstLine.value()), this._parentEl.dataset.name = "legend", this._parentEl.style.setProperty("--legend-source-item-button-width", `${O}px`);
                    const i = e => {
                        e.preventDefault(), t.showLegendWidgetContextMenu(e)
                    };
                    this._mouseEventHandler = new p.MouseEventHandler(this._parentEl, {
                        contextMenuEvent: i,
                        touchContextMenuEvent: i
                    })
                }
                destroy() {
                    if (this._isStudiesLegendHidden.destroy(), this._isAllLegendHidden.destroy(), this._hideAllExceptFirstLine.destroy(), this._themedColor.destroy(), this._showBackground.destroy(), this._backgroundTransparency.destroy(), this._collapsedDataSourcesCountSpawn.destroy(), h.trackingModeIsAvailable && null !== this._collapsedDataSourcesWrapperEl && this._collapsedDataSourcesWrapperEl.removeEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler),
                        this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), null !== this._dataSourcesAdditionalWrapperEl && (this._dataSourcesAdditionalWrapperEl.innerHTML = "", this._dataSourcesAdditionalWrapperEl = null), null !== this._dataSourcesEl && (this._dataSourcesEl.innerHTML = "", this._dataSourcesEl = null), null !== this._renderToggler && (this._renderToggler.destroy(), this._renderToggler = null), null !== this._mainDataSourceRenderer && (this._mainDataSourceRenderer.destroy(), this._mainDataSourceRenderer = null), 0 !== this._dataSourceRenderers.length) {
                        for (const t of this._dataSourceRenderers) t.destroy();
                        this._dataSourceRenderers = []
                    }
                    this._mouseEventHandler.destroy(), this._parentEl.innerHTML = "", delete this._parentEl
                }
                addMainDataSource(t, e) {
                    this._renderMainDataSourceEl(), this._mainDataSourceRenderer = new C(t, (0, l.ensureNotNull)(this._mainDataSourceEl), {
                        withActions: this._options.withActions,
                        customTextColor: this._options.customTextColor,
                        statusWidgetEl: e.getElement(),
                        hideInvisibleHover: N(e.visibleWidgetsCount, (t => Boolean(t))),
                        hideValues: e.errorWidgetIsShown
                    }), this._updateLegendVisibility(), t.onDestroy().subscribe(this, (() => {
                        null !== this._mainDataSourceRenderer && (this._mainDataSourceRenderer.destroy(), this._mainDataSourceRenderer = null)
                    }), !0)
                }
                addDataSources(t, e) {
                    this._renderDataSourcesEl();
                    const i = (0, l.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);
                    for (let s = 0; s < t.length; s++) {
                        const l = t[s],
                            o = new f(l, i, {
                                withActions: this._options.withActions,
                                customTextColor: this._options.customTextColor,
                                statusWidgetEl: e[s].getElement(),
                                hideInvisibleHover: N(e[s].visibleWidgetsCount, (t => Boolean(t))),
                                hideValues: e[s].errorWidgetIsShown
                            });
                        this._dataSourceRenderers.push(o), this._updateLegendVisibility(), l.onDestroy().subscribe(this, (() => {
                            const t = this._dataSourceRenderers.indexOf(o); - 1 !== t && (this._dataSourceRenderers[t].destroy(), this._dataSourceRenderers.splice(t, 1))
                        }), !0)
                    }
                }
                addCustomWidget(t, e) {
                    if (0 === e.block) {
                        this._renderMainDataSourceEl();
                        const i = (0, l.ensureNotNull)(this._mainDataSourceEl);
                        1 === e.position && t.renderTo(i, i.firstChild), 0 === e.position && t.renderTo(i)
                    }
                    if (1 === e.block) {
                        this._renderDataSourcesEl();
                        const i = (0, l.ensureNotNull)(this._dataSourcesAdditionalWrapperEl);
                        1 === e.position && t.renderTo(i, i.firstChild), 0 === e.position && t.renderTo(i)
                    }
                }
                firstTitle() {
                    return this._parentEl.firstElementChild
                }
                getElement() {
                    return this._parentEl
                }
                updateMode(t) {
                    const e = F && t < 133 ? 1 : t < 205 ? 2 : t < 222 ? 3 : 4;
                    null !== this._mainDataSourceRenderer && this._mainDataSourceRenderer.updateMode(e);
                    for (const t of this._dataSourceRenderers) t.updateMode(e);
                    this._parentEl.classList.toggle(S.medium, 3 === e), this._parentEl.classList.toggle(S.minimized, 2 === e), this._parentEl.classList.toggle(S.micro, 1 === e), null !== this._renderToggler && this._renderToggler.setMode(1 === e);
                    const i = !this._hideAllExceptFirstLine.value() && (h.trackingModeIsAvailable || t < 542);
                    this._parentEl.classList.toggle(S.directionColumn, i), this._parentEl.classList.toggle(S.hideUniportantValueItems, !u.CheckMobile.any() && t <= 272)
                }
                getMainSourceHeight() {
                    return null === this._mainDataSourceRenderer ? 0 : this._mainDataSourceRenderer.getHeight()
                }
                getDataSourceHeight() {
                    return 0 === this._dataSourceRenderers.length ? 0 : this._dataSourceRenderers[0].getHeight()
                }
                _renderMainDataSourceEl() {
                    null === this._mainDataSourceEl && (this._mainDataSourceEl = document.createElement("div"), this._mainDataSourceEl.classList.add(S.legendMainSourceWrapper), this._parentEl.insertBefore(this._mainDataSourceEl, this._dataSourcesEl))
                }
                _renderDataSourcesEl() {
                    null === this._dataSourcesEl && (this._dataSourcesEl = document.createElement("div"), this._dataSourcesEl.classList.add(S.sourcesWrapper), this._renderToggle(this._dataSourcesEl), this._dataSourcesAdditionalWrapperEl = document.createElement("div"), this._dataSourcesAdditionalWrapperEl.classList.add(S.sources), this._dataSourcesEl.appendChild(this._dataSourcesAdditionalWrapperEl), this._renderCollapsedCounter(this._dataSourcesAdditionalWrapperEl), this._parentEl.appendChild(this._dataSourcesEl))
                }
                _renderToggle(t) {
                    this._options.showToggleButton && (this._renderToggler = new P(t, this._options.themedColor, this._togglerOptions))
                }
                _renderCollapsedCounter(t) {
                    this._collapsedDataSourcesWrapperEl = document.createElement("div"), this._collapsedDataSourcesWrapperEl.className = `${S.item} ${S.last}`, this._collapsedDataSourcesEl = document.createElement("span"), this._collapsedDataSourcesEl.className = `${S.text} apply-common-tooltip`, this._collapsedDataSourcesWrapperEl.append(this._collapsedDataSourcesEl), t.append(this._collapsedDataSourcesWrapperEl), h.trackingModeIsAvailable && this._collapsedDataSourcesWrapperEl.addEventListener("touchend", this._showCollapsedDataSourcesTooltipHandler), this._updateCollapsedSourcesCount(this._collapsedDataSourcesCountSpawn.value())
                }
                _showCollapsedDataSourcesTooltip() {
                    (0, z.showOnElement)(this._collapsedDataSourcesEl, {
                        text: this._options.collapsedDataSourcesTitle.value()
                    }), this._addOutsideEventForHideTooltip()
                }
                _addOutsideEventForHideTooltip() {
                    null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), this._outsideEventForCollapsedTooltip = (0, I.addOutsideEventListener)(new CustomEvent("timestamp").timeStamp, this._collapsedDataSourcesWrapperEl, (() => {
                        null !== this._outsideEventForCollapsedTooltip && this._outsideEventForCollapsedTooltip(), (0, z.hide)()
                    }), window.document, {
                        touchEnd: !0
                    })
                }
                _updateCollapsedSourcesCount(t) {
                    if (null === this._collapsedDataSourcesWrapperEl || null === this._collapsedDataSourcesEl) return;
                    const e = 0 === t;
                    this._collapsedDataSourcesWrapperEl.classList.toggle(g.blockHidden, e), e || (w(this._collapsedDataSourcesEl, `+${t}`), this._collapsedDataSourcesEl.setAttribute("title", this._options.collapsedDataSourcesTitle.value()))
                }
                _updateLegendVisibility() {
                    this._parentEl.classList.toggle(g.blockHidden, this._isAllLegendHidden.value()), null !== this._dataSourcesEl && this._dataSourcesEl.classList.toggle(g.blockHidden, this._isStudiesLegendHidden.value())
                }
                _updateAllHiddenExeptFirstLine() {
                    this._parentEl.classList.toggle(S.wrappable, !this._hideAllExceptFirstLine.value())
                }
                _setCustomBg() {
                    const t = this._showBackground.value(),
                        e = this._themedColor.value(),
                        i = this._backgroundTransparency.value();
                    let s = "";
                    if (t) {
                        const [t, l, o] = (0, r.parseRgb)(e);
                        s = (0,
                            r.rgbaToString)([t, l, o, (0, r.normalizeAlphaComponent)(1 - i / 100)])
                    }
                    this._parentEl.style.color = s
                }
            }
            var G = i(54358),
                U = i(49152),
                j = i(87095),
                $ = i(36298),
                Y = i(57898),
                Z = i.n(Y),
                X = i(38223),
                J = i(97906);

            function Q(t) {
                return void 0 !== t ? j.resetTransparency(t) : t
            }
            const q = new $.TranslatedString("show {title}", k.t(null, void 0, i(87358))),
                K = new $.TranslatedString("hide {title}", k.t(null, void 0, i(70301))),
                tt = k.t(null, void 0, i(81428)),
                et = k.t(null, void 0, i(31971));
            class it {
                constructor(t, e, i, s, l) {
                    this._values = new(n())([]), this._actions = [], this._onDestroy = new(Z()), this._loading = new(n())(!1), this._moreActionCM = null, this._updateLoadingStatus = () => {
                        this._loading.setValue(this._source.isLoading())
                    }, this._model = t, this._source = e, this._options = i, this._callbacks = s, this._contextMenuOptions = l, this._disabled = new(n())(this._getDisabledState()), this._disabledOnInterval = new(n())(this._getDisabledOnIntervalState()), this._selected = new(n())(!1), this._isTitleHidden = new(n())(this._getTitleHiddenValue()), this._isValuesHidden = new(n())(this._getValuesHiddenValue()), this._isRowHidden = new(n())(this._getRowHiddenValue()), this._isEditable = new(n())(this._getIsEditable()), (0, J.combine)((() => ({})), this._isTitleHidden, this._isValuesHidden, this._disabled).subscribe(this._updateRowVisibilities.bind(this)), this._values.subscribe((() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    }))
                }
                destroy() {}
                onDestroy() {
                    return this._onDestroy
                }
                titles() {
                    return this._titles
                }
                values() {
                    return this._values.readonly()
                }
                actions() {
                    return this._actions
                }
                disabled() {
                    return this._disabled.readonly()
                }
                disabledOnInterval() {
                    return this._disabledOnInterval.readonly()
                }
                selected() {
                    return this._selected.readonly()
                }
                loading() {
                    return this._loading.readonly()
                }
                isTitleHidden() {
                    return this._isTitleHidden.readonly()
                }
                isValuesHidden() {
                    return this._isValuesHidden.readonly()
                }
                isRowHidden() {
                    return this._isRowHidden.readonly()
                }
                isEditable() {
                    return this._isEditable.readonly()
                }
                update() {
                    this._updateTitles(), this._updateValues(), this._updateStates()
                }
                updateSource(t) {
                    this._source !== t && (this._source = t, this.update(), this._isTitleHidden.setValue(this._getTitleHiddenValue()), this._isValuesHidden.setValue(this._getValuesHiddenValue()))
                }
                onToggleDisabled() {
                    const t = this._source.properties().childs().visible,
                        e = !t.value();
                    this._model.setProperty(t, e, (e ? q : K).format({
                        title: new $.TranslatedString(this._source.name(), this._source.title())
                    })), A((e ? "Show" : "Hide") + " source")
                }
                onShowSettings(t) {
                    this._source.userEditEnabled() && (this.setSourceSelected(), this._callbacks.showChartPropertiesForSource(this._source, t), A("Settings for source"))
                }
                onShowMoreActions(t) {
                    return this._options.readOnlyMode ? Promise.resolve(null) : (this._callbacks.updateActions(), A("Show source context menu"), this._callbacks.showContextMenuForSources([this._source], this._calcNewPosition(t), this._contextMenuOptions))
                }
                setSourceSelected() {
                    this._model.selectionMacro((t => {
                        t.clearSelection(), t.addSourceToSelection(this._source)
                    }))
                }
                _moreActionHandler(t) {
                    t.preventDefault(), null !== this._moreActionCM && this._moreActionCM.isShown() ? this._moreActionCM = null : (this.setSourceSelected(),
                        this.onShowMoreActions(t).then((t => {
                            this._moreActionCM = t
                        })))
                }
                _updateStates() {
                    this._disabled.setValue(this._getDisabledState()), this._disabledOnInterval.setValue(this._getDisabledOnIntervalState()), this._selected.setValue(this._model.selection().isSelected(this._source)), this._isEditable.setValue(this._getIsEditable()), this._updateLoadingStatus()
                }
                _hasValues() {
                    return this._values.value().length > 0
                }
                _getEyeTitle() {
                    return this._disabled.value() ? tt : et
                }
                _getIsEditable() {
                    return this._source.userEditEnabled()
                }
                _getDisabledState() {
                    return !this._source.properties().visible.value()
                }
                _updateRowVisibilities() {
                    this._isRowHidden.setValue(this._getRowHiddenValue())
                }
                _getRowHiddenValue() {
                    return this._options.readOnlyMode && this._disabled.value() || this._isTitleHidden.value() && (this._isValuesHidden.value() || this._disabled.value())
                }
                _calcNewPosition(t) {
                    let e = {};
                    if (t.hasOwnProperty("touches") && t.touches.length > 0) e = {
                        clientX: t.touches[0].clientX,
                        clientY: t.touches[0].clientY
                    };
                    else if (null !== t.target) {
                        const i = t.target.getBoundingClientRect();
                        e = {
                            clientX: (0, X.isRtl)() ? i.right : i.left,
                            clientY: i.top + i.height + 3
                        }
                    } else {
                        const i = t;
                        e = {
                            clientX: i.clientX,
                            clientY: i.clientY
                        }
                    }
                    return e
                }
            }
            var st = i(14787),
                lt = i(3792),
                ot = i(41674),
                nt = i(87258),
                at = i(45534);
            const rt = k.t(null, void 0, i(41610)),
                dt = k.t(null, void 0, i(93666)),
                ut = k.t(null, void 0, i(8209)),
                ht = d.enabled("show_hide_button_in_legend"),
                ct = d.enabled("hide_resolution_in_legend");
            class _t extends it {
                constructor(t, e, i, s, l) {
                    super(t, e, i, s, l), this._titles = {
                        title: new(n())(""),
                        description: new(n())(""),
                        interval: new(n())(""),
                        provider: new(n())(""),
                        exchange: new(n())(""),
                        chartStyle: new(n())(""),
                        priceSource: new(n())("")
                    }, this._symbolMarker = null, this._symbolMarkerIcon = null, this._flagged = new(n())(null), this._symbolAction = null, this._symbol = null, this._isOneButtonCanBeStick = !1, this._layoutChartSyncLegendRenderer = null, this._isChartLinked = new(n())(!1).readonly().spawn(), this._createActions(), this._updateSymbolMarker();
                    const o = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    o.showSeriesTitle.subscribe(this, (() => {
                        this._isTitleHidden.setValue(this._getTitleHiddenValue())
                    })), this._isPriceSourceHidden = (0, U.createWVFromGetterAndSubscription)((() => !o.showPriceSource.value()), o.showPriceSource), this._valuesVisibleProperty = (0, U.combineProperty)(((t, e, i) => t || e || i), o.showSeriesOHLC, o.showBarChange, o.showVolume), this._valuesVisibleProperty.subscribe(null, (() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    })), this.update(), this._source.onStatusChanged().subscribe(this, this._updateLoadingStatus)
                }
                destroy() {
                    super.destroy(), this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.unsubscribeAll(this), this._source.onStatusChanged().unsubscribeAll(this), this._valuesVisibleProperty.destroy(), this._isPriceSourceHidden.destroy(), this._onDestroy.fire()
                }
                flagged() {
                    return this._flagged.readonly()
                }
                linked() {
                    return this._isChartLinked
                }
                onShowSettings() {
                    this._source.userEditEnabled() && this._callbacks.showGeneralChartProperties(st.TabNames.symbol)
                }
                isOneButtonCanBeStick() {
                    return this._isOneButtonCanBeStick
                }
                _updateTitles() {
                    const t = (0, l.ensureNotNull)(this._source.statusView()).getSplitTitle();
                    this._titles.title.setValue((0, G.clean)(t.title, !0)), this._titles.description.setValue((0, G.clean)(t.description, !0));
                    const e = !ct && !0;
                    this._titles.interval.setValue(e ? (0, G.clean)(t.interval, !0) : ""), this._titles.provider.setValue((0, G.clean)(t.provider, !0)), this._titles.exchange.setValue((0, G.clean)(t.exchange, !0)), this._titles.chartStyle.setValue((0, G.clean)(t.chartStyle, !0)), this._titles.priceSource.setValue((0, G.clean)(this._isPriceSourceHidden.value() ? "" : t.priceSource, !0))
                }
                _updateValues() {
                    const t = this._source.legendView(),
                        e = this._values.value(),
                        i = t.marketTitle(),
                        s = t.marketTitle().length > 0;
                    if (0 === e.length) {
                        const e = {
                                value: new(n())(""),
                                color: new(n())(""),
                                visible: new(n())(s),
                                title: new(n())(i),
                                unimportant: new(n())(!1)
                            },
                            l = t.items().map((t => ({
                                value: new(n())(t.value()),
                                color: new(n())(Q(t.color())),
                                visible: new(n())(t.visible()),
                                title: new(n())(t.title()),
                                unimportant: new(n())(t.unimportant())
                            })));
                        this._values.setValue([e].concat(l))
                    } else {
                        e[0].title.setValue(i), e[0].visible.setValue(s);
                        const l = t.items();
                        for (let t = 0; t < l.length; t++) {
                            const i = l[t];
                            e[t + 1].value.setValue(i.value()), e[t + 1].color.setValue(Q(i.color())), e[t + 1].visible.setValue(i.visible()), e[t + 1].title.setValue(i.title())
                        }
                    }
                }
                _updateStates() {
                    super._updateStates(), this._updateSymbolMarker()
                }
                _getDisabledOnIntervalState() {
                    return !1
                }
                _getTitleHiddenValue() {
                    return !this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showSeriesTitle.value()
                }
                _getValuesHiddenValue() {
                    return !this._hasValues() || !this._valuesVisibleProperty.value()
                }
                _createActions() {
                    if (ht) {
                        const t = {
                            iconMap: new Map([
                                ["large", ot],
                                ["small", lt]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
                            visible: new(n())(!0),
                            className: S.eye,
                            title: new(n())(this._getEyeTitle()),
                            dataset: {
                                name: "legend-show-hide-action"
                            }
                        };
                        this._actions.push(t), this._disabled.subscribe((() => {
                            t.title.setValue(this._getEyeTitle())
                        }))
                    }
                    this._actions.push({
                        iconMap: new Map([
                            ["large", at],
                            ["small", nt]
                        ]),
                        action: this._moreActionHandler.bind(this),
                        visible: new(n())(!0),
                        title: new(n())(rt),
                        dataset: {
                            name: "legend-more-action"
                        }
                    })
                }
                _getMarkerTitle() {
                    return null !== this._symbolMarker ? this._symbolMarker.isMarked() ? ut : dt : ""
                }
                _symbolActionHandler() {
                    null !== this._symbolMarker && (this._updateSymbolMarker(), A("Change flag state"))
                }
                _updateSymbolMarker() {
                    this._isOneButtonCanBeStick = !0
                }
            }
            var pt = i(28853),
                mt = i(3615);
            var gt = i(96362),
                vt = i(59224),
                bt = i(83637),
                wt = i(34882),
                St = i(88658),
                yt = i(52506),
                Mt = i(64063),
                Ct = i(8561);
            (0, vt.getLogger)("Chart.LegendWidget");
            const Et = k.t(null, void 0, i(89517)),
                ft = k.t(null, void 0, i(66324)),
                kt = k.t(null, void 0, i(34596)),
                Vt = k.t(null, void 0, i(41610)),
                At = (k.t(null, void 0, i(82751)), k.t(null, void 0, i(89790)), k.t(null, void 0, i(37809))),
                Tt = (d.enabled("study_buttons_in_legend"), d.enabled("show_hide_button_in_legend")),
                xt = d.enabled("property_pages"),
                Lt = d.enabled("format_button_in_legend"),
                Ht = d.enabled("delete_button_in_legend");
            class Wt extends it {
                constructor(t, e, i, s, l) {
                    super(t, e, i, s, l), this._titles = {
                        title: new(n())(""),
                        args: new(n())("")
                    }, this._error = new(n())(!1), this._isPineScriptDataSource = new(n())(!1), this._pineAction = null, this._globalVisibility = new(n())(!0), this._createActions();
                    const o = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs(),
                        a = [o.showSeriesTitle, o.showStudyTitles];
                    for (const t of a) t.subscribe(this, (() => {
                        this._isTitleHidden.setValue(this._getTitleHiddenValue())
                    }));
                    const r = [o.showSeriesOHLC, o.showBarChange, o.showStudyValues];
                    for (const t of r) t.subscribe(this, (() => {
                        this._isValuesHidden.setValue(this._getValuesHiddenValue())
                    }));
                    this.update()
                }
                destroy() {
                    super.destroy();
                    const t = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    t.showSeriesTitle.unsubscribeAll(this), t.showStudyTitles.unsubscribeAll(this), t.showSeriesOHLC.unsubscribeAll(this), t.showBarChange.unsubscribeAll(this), t.showStudyValues.unsubscribeAll(this), this._onDestroy.fire()
                }
                error() {
                    return this._error.readonly()
                }
                isPineScriptDataSource() {
                    return this._isPineScriptDataSource.readonly()
                }
                updateSource(t) {
                    this._source !== t && (this._values.setValue([]), super.updateSource(t), this._updateAbleShowSourceCode())
                }
                onRemoveSource() {
                    var t;
                    this._source.isUserDeletable() && (this._source.hasChildren() ? (t = this._model.removeSource.bind(this._model, this._source, !1), (0, mt.showConfirm)({
                        title: k.t(null, void 0, i(38154)),
                        text: k.t(null, void 0, i(52003)),
                        onConfirm: ({
                            dialogClose: e
                        }) => {
                            t(), e()
                        }
                    })) : this._model.removeSource(this._source, !1), A("Remove sources"))
                }
                onShowSourceCode() {
                    0
                }
                setGlobalVisibility(t) {
                    this._globalVisibility.setValue(t)
                }
                globalVisibility() {
                    return this._globalVisibility.readonly()
                }
                getFullTitle() {
                    return [this._titles.title, this._titles.args].map((t => t.value())).join(" ")
                }
                _updateTitles() {
                    const t = (0, l.ensureNotNull)(this._source.statusView()).getSplitTitle();
                    this._titles.title.setValue((0, G.clean)(t[0], !0));
                    const e = Array.isArray(t[1]) ? t[1].join(" ") : t[1] || "";
                    this._titles.args.setValue((0, G.clean)(e, !0))
                }
                _updateValues() {
                    const t = this._source.legendView();
                    if (null === t) return;
                    if (0 === t.items().length) return;
                    const e = this._values.value();
                    if (0 === e.length) {
                        const e = t.items().map((t => ({
                            value: new(n())(t.value()),
                            color: new(n())(Q(t.color())),
                            visible: new(n())(t.visible()),
                            unimportant: new(n())(t.unimportant()),
                            title: new(n())(t.title())
                        })));
                        this._values.setValue(e)
                    } else {
                        const i = t.items();
                        for (let t = 0; t < i.length; t++) {
                            const s = e[t],
                                l = i[t];
                            s.value.setValue(l.value()), s.color.setValue(Q(l.color())), s.visible.setValue(l.visible()), s.title.setValue(l.title())
                        }
                    }
                }
                _updateStates() {
                    super._updateStates(), void 0 !== this._error && this._error.setValue(Boolean(this._source.isFailed()))
                }
                _getTitleHiddenValue() {
                    const t = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    return this._isSymbolLikeStudy() ? !t.showSeriesTitle.value() : !t.showStudyTitles.value()
                }
                _getDisabledOnIntervalState() {
                    return !(!(0, pt.isStudy)(this._source) && !(0, pt.isStudyStub)(this._source)) && !this._source.isActualInterval()
                }
                _getValuesHiddenValue() {
                    if (!this._hasValues()) return !0;
                    const t = this._model.model().properties().childs().paneProperties.childs().legendProperties.childs();
                    return this._isSymbolLikeStudy() ? !t.showSeriesOHLC.value() && !t.showBarChange.value() : !t.showStudyValues.value()
                }
                _isSymbolLikeStudy() {
                    return this._source instanceof Mt.study_Overlay || this._source instanceof Ct.StudyCompare
                }
                _updateAbleShowSourceCode() {
                    0
                }
                _updateVisibilityPineAction(t) {
                    null !== this._pineAction && (this._pineAction.visible.setValue(t), this._isPineScriptDataSource.setValue(t))
                }
                _createActions() {
                    if (this._options.readOnlyMode) return;
                    if (this._pineAction = {
                            iconMap: new Map([
                                ["large", wt],
                                ["small", wt]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSourceCode.bind(this)),
                            visible: new(n())(!1),
                            title: new(n())(ft),
                            dataset: {
                                name: "legend-pine-action"
                            }
                        }, Tt) {
                        const t = {
                            iconMap: new Map([
                                ["large", ot],
                                ["small", lt]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onToggleDisabled.bind(this)),
                            visible: new(n())(!this._getDisabledOnIntervalState()),
                            className: S.eye,
                            title: new(n())(this._getEyeTitle()),
                            dataset: {
                                name: "legend-show-hide-action"
                            }
                        };
                        this._actions.push(t), this._disabled.subscribe((() => {
                            t.title.setValue(this._getEyeTitle())
                        }));
                        const e = {
                            iconMap: new Map([
                                ["large", ot],
                                ["small", lt]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this, st.TabNames.visibility)),
                            visible: new(n())(this._getDisabledOnIntervalState()),
                            className: S.intervalEye,
                            title: new(n())(At),
                            dataset: {
                                name: "legend-interval-show-hide-action"
                            }
                        };
                        this._actions.push(e), this._disabledOnInterval.subscribe((i => {
                            e.visible.setValue(i), t.visible.setValue(!i)
                        }))
                    }
                    if (xt && Lt && (!(0, pt.isStudy)(this._source) || new gt.MetaInfoHelper(this._source.metaInfo()).hasUserEditableOptions())) {
                        const t = {
                            iconMap: new Map([
                                ["large", bt],
                                ["small", bt]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onShowSettings.bind(this)),
                            visible: new(n())(this._getIsEditable()),
                            title: new(n())(Et),
                            dataset: {
                                name: "legend-settings-action"
                            }
                        };
                        this._actions.push(t), this._isEditable.subscribe((e => {
                            t.visible.setValue(e)
                        }))
                    }
                    if (Ht) {
                        const t = {
                            iconMap: new Map([
                                ["large", yt],
                                ["small", St]
                            ]),
                            action: (0, m.wrapHandlerWithPreventEvent)(this.onRemoveSource.bind(this)),
                            visible: new(n())(this._getIsEditable()),
                            title: new(n())(kt),
                            dataset: {
                                name: "legend-delete-action"
                            }
                        };
                        this._actions.push(t), this._isEditable.subscribe((e => {
                            t.visible.setValue(e)
                        }))
                    }
                    const t = {
                        iconMap: new Map([
                            ["large", at],
                            ["small", nt]
                        ]),
                        action: this._moreActionHandler.bind(this),
                        visible: new(n())(this._getIsEditable()),
                        title: new(n())(Vt),
                        dataset: {
                            name: "legend-more-action"
                        }
                    };
                    this._actions.push(t), this._isEditable.subscribe((e => {
                        t.visible.setValue(e)
                    }))
                }
            }
            var Dt = i(39347),
                Bt = i(10643),
                Pt = i(42960),
                zt = i(98425),
                It = i(53180),
                Nt = i(18611),
                Ot = i(51983);

            function Ft(t, e, i) {
                t.setProperty(e, !e.value(), i)
            }
            const Rt = new $.TranslatedString("change symbol description visibility", k.t(null, void 0, i(26717))),
                Gt = new $.TranslatedString("change open market status visibility", k.t(null, void 0, i(18644))),
                Ut = new $.TranslatedString("change OHLC values visibility", k.t(null, void 0, i(57889))),
                jt = new $.TranslatedString("change bar change visibility", k.t(null, void 0, i(45110))),
                $t = new $.TranslatedString("change indicator titles visibility", k.t(null, void 0, i(31325))),
                Yt = new $.TranslatedString("change indicator arguments visibility", k.t(null, void 0, i(96162))),
                Zt = new $.TranslatedString("change indicator values visibility", k.t(null, void 0, i(99774))),
                Xt = new $.TranslatedString("change volume values visibility", k.t(null, void 0, i(9455))),
                Jt = new $.TranslatedString("change symbol field visibility", k.t(null, void 0, i(6091))),
                Qt = k.t(null, void 0, i(63143)),
                qt = k.t(null, void 0, i(75991)),
                Kt = k.t(null, void 0, i(99487)),
                te = k.t(null, void 0, i(22519)),
                ee = k.t(null, void 0, i(1111)),
                ie = k.t(null, void 0, i(26315)),
                se = k.t(null, void 0, i(26935)),
                le = k.t(null, void 0, i(84098)),
                oe = k.t(null, void 0, i(46041)),
                ne = (0, It.appendEllipsis)(k.t(null, void 0, i(89517))),
                ae = d.enabled("symbol_info_price_source");
            var re = i(78071),
                de = i(38618),
                ue = i(61146),
                he = i(967),
                ce = i(84917),
                _e = i(41249),
                pe = i(32923);

            function me(t) {
                return t === ce.WeekDays.SUNDAY ? ce.WeekDays.SATURDAY : t - 1
            }

            function ge(t) {
                return t === ce.WeekDays.SATURDAY ? ce.WeekDays.SUNDAY : t + 1
            }

            function ve(t, e) {
                const i = me(e);
                return 0 === t[i].entries.length ? ve(t, i) : {
                    dayIndex: i,
                    entries: t[i].entries
                }
            }

            function be(t, e) {
                const i = ge(e);
                return 0 === t[i].entries.length ? be(t, i) : {
                    dayIndex: i,
                    entries: t[i].entries
                }
            }

            function we(t) {
                for (; t > _e.minutesPerDay;) t -= _e.minutesPerDay;
                const e = t % 60,
                    i = (t - e) / 60;
                return (0, ue.numberToStringWithLeadingZero)(i, 2) + ":" + (0, ue.numberToStringWithLeadingZero)(e, 2)
            }
            const Se = {
                [ce.WeekDays.MONDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.MONDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.TUESDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.TUESDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.WEDNESDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.WEDNESDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.THURSDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.THURSDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.FRIDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.FRIDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.SATURDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.SATURDAY],
                    isActive: !1,
                    entries: []
                },
                [ce.WeekDays.SUNDAY]: {
                    title: he.weekDaysShortNames[ce.WeekDays.SUNDAY],
                    isActive: !1,
                    entries: []
                }
            };

            function ye(t, e) {
                return t.start.value === e.start.value && t.end.value === e.end.value
            }

            function Me(t, e) {
                return ye(t[0], e[0])
            }

            function Ce(t) {
                const e = t.start(),
                    i = t.length(),
                    s = t.sessionStartDayOfWeek(),
                    l = t.sessionEndDayOfWeek(),
                    o = we(e),
                    n = we(e + i);
                return i > _e.minutesPerDay ? `${he.weekDaysShortNames[s]} ${o} — ${he.weekDaysShortNames[l]} ${n}` : `${o} — ${n}`
            }

            function Ee(t, e, i, s) {
                return Math.abs(s - i) > 1 ? `${he.weekDaysShortNames[i]} ${t.title} — ${he.weekDaysShortNames[s]} ${e.title}` : `${t.title} — ${e.title}`
            }

            function fe(t, e, i) {
                for (const s of e) {
                    let e = s.sessionStartDayOfWeek();
                    const l = s.start(),
                        o = s.length(),
                        n = l + o,
                        a = [];
                    if (n <= _e.minutesPerDay) a.push([l, n]);
                    else {
                        const t = Math.min(_e.minutesPerDay - l, o);
                        a.push([l, l + t]), a.push([0, o - t])
                    }
                    for (let l = 0; l < a.length; l++) {
                        const o = a[l],
                            [n, r] = o,
                            d = n / _e.minutesPerDay,
                            u = (0, re.lowerbound)(t[e].entries, d, ((t, e) => t.start.value < e)),
                            h = {
                                start: {
                                    value: d,
                                    title: we(n),
                                    isFirstOrLastPoint: n === s.start()
                                },
                                end: {
                                    value: r / _e.minutesPerDay,
                                    title: we(r),
                                    isFirstOrLastPoint: a.length - 1 === l
                                },
                                type: i,
                                tooltip: Ce(s),
                                showStartForLastEntry: !1,
                                showEndForFirstEntry: !1
                            };
                        t[e].entries.splice(u, 0, h), e = ge(e)
                    }
                }
            }
            class ke {
                constructor(t) {
                    this.sessionsDays = new(n())((0, a.clone)(Se)), this.todaySession = new(n())((0, a.clone)({
                        entries: []
                    })), this._todayInExchangeTime = null, this._symbolInfo = t.symbolInfo().spawn(), this._symbolInfo.subscribe(this._updateEntriesBySubSessions.bind(this), {
                        callWithLast: !0
                    })
                }
                destroy() {
                    this._symbolInfo.destroy()
                }
                currentTimeValue() {
                    return null === this._todayInExchangeTime ? -1 : _e.get_minutes_from_midnight(this._todayInExchangeTime) / _e.minutesPerDay
                }
                timezone() {
                    const t = this._symbolInfo.value();
                    return null === t ? "" : (0, de.timezoneTitle)(t.timezone)
                }
                _updateEntriesBySubSessions(t) {
                    var e;
                    this._updateTodayWithOffsets(t);
                    const i = this._createSubSessionSpecs(t),
                        s = (o = (null === (e = this._todayInExchangeTime) || void 0 === e ? void 0 : e.getUTCDay()) || (new Date).getDay()) < ce.WeekDays.SATURDAY ? o + 1 : ce.WeekDays.SUNDAY;
                    var o;
                    const n = (0, a.clone)(Se);
                    n[s].isActive = !0;
                    for (const t of Array.from(i.keys())) {
                        fe(n, (0, l.ensureDefined)(i.get(t)).getEntriesForWeekByCalendar((0, l.ensureNotNull)(this._todayInExchangeTime)), t)
                    }! function (t) {
                        const e = we(0),
                            i = we(_e.minutesPerDay),
                            s = (0, a.clone)(t);
                        for (const o of Object.keys(t)) {
                            const n = parseInt(o),
                                a = t[n].entries;
                            if (0 === a.length) {
                                a.push({
                                    start: {
                                        value: 0,
                                        title: e,
                                        isFirstOrLastPoint: !0
                                    },
                                    end: {
                                        value: 1,
                                        title: i,
                                        isFirstOrLastPoint: !0
                                    },
                                    type: 3,
                                    tooltip: `${e} — ${i}`,
                                    showStartForLastEntry: !1,
                                    showEndForFirstEntry: !1
                                });
                                continue
                            }
                            const r = me(n),
                                d = ge(n),
                                u = s[r].entries,
                                h = s[d].entries,
                                c = ve(s, n),
                                _ = be(s, n),
                                p = a.length;
                            let m = 0;
                            for (let t = 0; t < p; t++) {
                                const i = a[t],
                                    s = t > 0 ? a[t - 1] : null,
                                    o = 0 === t;
                                if (0 === i.start.value || 0 === i.start.value && 1 === i.end.value || null !== s && i.start.value === s.end.value) {
                                    m++;
                                    continue
                                }
                                const r = o ? c.entries[c.entries.length - 1] : (0, l.ensureNotNull)(s),
                                    d = {
                                        start: {
                                            value: o ? 0 : a[t - 1].end.value,
                                            title: o ? e : a[t - 1].end.title,
                                            isFirstOrLastPoint: !(o && u.length > 0) || 1 === u[u.length - 1].end.value
                                        },
                                        end: {
                                            value: i.start.value,
                                            title: i.start.title,
                                            isFirstOrLastPoint: !0
                                        },
                                        type: 3,
                                        tooltip: Ee(r.end, i.start, c.dayIndex, n),
                                        showStartForLastEntry: !1,
                                        showEndForFirstEntry: !1
                                    };
                                a.splice(m, 0, d), m = t + 2
                            }
                            const g = a[a.length - 1];
                            1 !== g.end.value && a.push({
                                start: {
                                    value: g.end.value,
                                    title: g.end.title,
                                    isFirstOrLastPoint: !0
                                },
                                end: {
                                    value: 1,
                                    title: we(_e.minutesPerDay),
                                    isFirstOrLastPoint: !(h.length > 0) || 0 === h[0].start.value
                                },
                                type: 3,
                                tooltip: Ee(g.end, _.entries[0].start, n, _.dayIndex),
                                showStartForLastEntry: !1,
                                showEndForFirstEntry: !1
                            })
                        }
                    }(n),
                    function (t) {
                        for (const s of Object.keys(t)) {
                            const l = parseInt(s),
                                o = t[l].entries;
                            if (1 === o.length) continue;
                            const n = me(l),
                                a = ge(l),
                                r = o[0],
                                d = o[o.length - 1];
                            r.start.isFirstOrLastPoint || (r.showStartForLastEntry = (e = o, i = t[n].entries, ye(e[e.length - 1], i[i.length - 1]))),
                                d.end.isFirstOrLastPoint || (d.showEndForFirstEntry = Me(o, t[a].entries))
                        }
                        var e, i
                    }(n), this.sessionsDays.setValue(n), this.todaySession.setValue(n[s])
                }
                _createSubSessionSpecs(t) {
                    if (null === t) return new Map;
                    if (void 0 === t.subsessions) return new Map([
                        [0, new pe.SessionSpec(t.timezone, t.session, t.session_holidays, t.corrections)]
                    ]);
                    const e = "regular",
                        i = "premarket",
                        s = "postmarket",
                        l = [e, i, s],
                        o = new Map;
                    for (const n of l) {
                        let l = null;
                        switch (n) {
                            case e:
                                l = 0;
                                break;
                            case i:
                                l = 1;
                                break;
                            case s:
                                l = 2
                        }
                        if (null !== l) {
                            const e = t.subsessions.find((t => t.id === n));
                            void 0 !== e && o.set(l, new pe.SessionSpec(t.timezone, e["session-display"] || e.session, t.session_holidays, e["session-correction"]))
                        }
                    }
                    return o
                }
                _updateTodayWithOffsets(t) {
                    if (null === t) return void(this._todayInExchangeTime = null);
                    const e = 1e3 * window.ChartApiInstance.serverTimeOffset();
                    this._todayInExchangeTime = _e.get_cal_from_unix_timestamp_ms(_e.get_timezone(t.timezone), Date.now() + e)
                }
            }
            var Ve = i(50959),
                Ae = i(97754),
                Te = i(77975),
                xe = i(36174),
                Le = i(83314);
            const He = new WeakMap;

            function We(t) {
                return He.has(t) || He.set(t, (0, xe.randomHash)()), (0, l.ensureDefined)(He.get(t))
            }
            const De = new Map([
                    [0, Le.green],
                    [1, Le.orange],
                    [2, Le.blue],
                    [3, Le.gray]
                ]),
                Be = new Map([
                    [0, k.t(null, void 0, i(83949))],
                    [1, k.t(null, void 0, i(56042))],
                    [2, k.t(null, void 0, i(29985))],
                    [3, k.t(null, void 0, i(95814))]
                ]),
                Pe = k.t(null, void 0, i(80227));

            function ze(t) {
                const {
                    segment: e,
                    forceStart: i,
                    forceEnd: s
                } = t, l = e.end.value - e.start.value, o = l < .03, n = {
                    left: 100 * e.start.value + "%",
                    width: `calc(${100*l}% + ${o?2:0}px)`
                }, a = Ae(Le.segment, De.get(e.type), (i || e.start.isFirstOrLastPoint) && Le.start, (s || e.end.isFirstOrLastPoint) && Le.end, o && Le.small, "common-tooltip-html", "apply-common-tooltip"), r = function (t, e) {
                    return `<div class="${Le.tooltip}">\n\t\t<span class="${De.get(e)}">${Be.get(e)}</span>\n\t\t<span class="${Le.time}">${t}</span>\n\t</div>`
                }(e.tooltip, e.type);
                return Ve.createElement("div", {
                    className: a,
                    style: n,
                    "data-tooltip": r
                })
            }

            function Ie(t) {
                const {
                    sessionDay: e
                } = t, i = e.entries.map(((t, i) => Ve.createElement(ze, {
                    key: `${We(t)}Segment`,
                    segment: t,
                    forceStart: 0 === i && 3 === t.type,
                    forceEnd: i === e.entries.length - 1 && 3 === t.type
                }))), s = Ae(Le.sessionDay, e.isActive && Le.active);
                return Ve.createElement("div", {
                    className: s
                }, Ve.createElement("div", {
                    className: Le.weekDay
                }, e.title), Ve.createElement("div", {
                    className: Le.sessionDaySegments
                }, i))
            }

            function Ne(t) {
                const {
                    sessionDays: e,
                    currentTimeMark: i
                } = t, s = [], l = parseInt(Object.keys(e).filter((t => e[parseInt(t)].isActive))[0]), o = e[l], n = o.entries.filter((t => t.start.value <= i && t.end.value >= i))[0];
                !n.start.isFirstOrLastPoint && n.showStartForLastEntry ? s.push(o.entries[o.entries.length - 1].start) : s.push(n.start);
                const a = !n.end.isFirstOrLastPoint && n.showEndForFirstEntry ? o.entries[0].end : n.end;
                if (s[0].value !== a.value && s.push(a), 0 === s.length) return null;
                s.sort(((t, e) => t.value - e.value));
                const r = s.map((t => Ve.createElement("div", {
                        key: We(t),
                        className: Le.timeMark
                    }, t.title))),
                    d = 100 * (2 === s.length ? s[1].value - s[0].value : 0),
                    u = Ae(d > 12 && Le.timeMarkSegmentAlignByEnds, Le.timeMarkSegment);
                return Ve.createElement("div", {
                    className: Le.sessionDay
                }, Ve.createElement("div", {
                    className: Le.weekDay
                }), Ve.createElement("div", {
                    className: Le.timeMarkWrapper
                }, Ve.createElement("div", {
                    className: u,
                    style: {
                        left: 100 * s[0].value + "%",
                        width: `${d}%`
                    }
                }, r)))
            }
            class Oe {
                constructor(t) {
                    this._source = t, this._fullSessionScheduleViewModel = new ke(t)
                }
                destroy() {
                    this._fullSessionScheduleViewModel.destroy()
                }
                renderer(t, e) {
                    var i, s;
                    return (null === (s = null === (i = this._source.marketStatusModel()) || void 0 === i ? void 0 : i.futuresContractExpirationTime()) || void 0 === s ? void 0 : s.expired().value()) ? null : function (t) {
                        const {
                            key: e,
                            className: i,
                            now: s,
                            timezone: l
                        } = t, o = (0, Te.useWatchedValueReadonly)({
                            watchedValue: t.sessionDays
                        }), n = Object.values(o).filter((t => t.isActive))[0], a = Ae(i, Le.wrapper);
                        return Ve.createElement("div", {
                            key: e,
                            className: a
                        }, Ve.createElement("div", {
                            className: Le.sessionDayWrapper
                        }, Ve.createElement(Ie, {
                            sessionDay: n
                        }), Ve.createElement("div", {
                            className: Le.nowWrapper
                        }, Ve.createElement("div", {
                            className: Le.now,
                            style: {
                                left: 100 * s + "%"
                            }
                        }))), Ve.createElement(Ne, {
                            sessionDays: o,
                            currentTimeMark: s
                        }), Ve.createElement("div", {
                            className: Le.timezone
                        }, `${Pe}: ${l}`))
                    }({
                        key: t,
                        className: e,
                        sessionDays: this._fullSessionScheduleViewModel.sessionsDays,
                        now: this._fullSessionScheduleViewModel.currentTimeValue(),
                        timezone: this._fullSessionScheduleViewModel.timezone()
                    })
                }
                updateSource(t) {}
            }
            var Fe = i(48891),
                Re = i(94474),
                Ge = i(64123);
            class Ue {
                constructor(t) {
                    this.isBlinkingMode = new(n())(!1), this._status = new(n())(null), this._fullTooltip = new(n())(null), this._iconClassNames = new(n())(null), this._visible = new(n())(!1), this._tooltip = new(n())(null), this._icon = new(n())(null), this._className = new(n())(null), this._customColor = new(n())(null), this._infoMaps = t, this._size = t.size || "small", this._status.subscribe(this._updateByStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                turnOffBlinkingMode() {}
                status() {
                    return this._status
                }
                tooltip() {
                    return this._tooltip
                }
                icon() {
                    return this._icon
                }
                className() {
                    return this._className
                }
                visible() {
                    return this._visible
                }
                size() {
                    return this._size
                }
                fullInfo() {
                    return this._fullTooltip
                }
                customColor() {
                    return this._customColor
                }
                _getTooltip(t) {
                    var e, i;
                    return null !== (i = null === (e = this._infoMaps.tooltipMap) || void 0 === e ? void 0 : e.get(t)) && void 0 !== i ? i : null
                }
                _getIcon(t) {
                    let e;
                    const i = this._infoMaps.iconMap.get(t);
                    return void 0 !== i && (e = i.get(this._size)), e || null
                }
                _getClassName(t) {
                    return this._infoMaps.classNameMap.get(t) || null
                }
                _getFullTooltipIconClassNames(t) {
                    const e = this._getClassName(t);
                    return e ? [Ge.statusItem, e] : []
                }
                _getTitle(t) {
                    var e, i;
                    return null !== (i = null === (e = this._infoMaps.titleMap) || void 0 === e ? void 0 : e.get(t)) && void 0 !== i ? i : null
                }
                _getTitleColor(t) {
                    var e, i;
                    return null !== (i = null === (e = this._infoMaps.titleColorMap) || void 0 === e ? void 0 : e.get(t)) && void 0 !== i ? i : null
                }
                _getAction(t) {
                    var e, i;
                    return null !== (i = null === (e = this._infoMaps.actionMap) || void 0 === e ? void 0 : e.get(t)) && void 0 !== i ? i : null
                }
                _getHTML(t) {
                    var e, i, s;
                    return null !== (s = null === (i = null === (e = this._infoMaps.htmlMap) || void 0 === e ? void 0 : e.get(t)) || void 0 === i ? void 0 : i.map(Re.htmlEscape)) && void 0 !== s ? s : []
                }
                async _updateFullTooltip() {
                    const t = this._status.value();
                    null !== t ? this._fullTooltip.setValue([{
                        icon: this._getIcon(t),
                        iconClassName: this._getFullTooltipIconClassNames(t),
                        title: this._getTitle(t),
                        titleColor: this._getTitleColor(t),
                        html: this._getHTML(t),
                        size: this._size,
                        action: this._getAction(t)
                    }]) : this._fullTooltip.setValue(null)
                }
                _updateByStatus(t) {
                    if (null === t || this._shouldBeHiddenByStatus(t)) return this._icon.setValue(null), this._tooltip.setValue(null), void this._visible.setValue(!1);
                    this._icon.setValue(this._getIcon(t)), this._className.setValue(this._getClassName(t)), this._tooltip.setValue(this._getTooltip(t)), this._visible.setValue(!0), this._updateFullTooltip()
                }
                _shouldBeHiddenByStatus(t) {
                    return !1
                }
            }
            var je = i(12646),
                $e = i(31233),
                Ye = i(55593),
                Ze = i(69410),
                Xe = i(52828),
                Je = i(91665),
                Qe = i(39379),
                qe = i(72844),
                Ke = i(23683);
            const ti = new Map([
                    ["small", je],
                    ["medium", $e],
                    ["large", $e]
                ]),
                ei = new Map([
                    ["small", Ye],
                    ["medium", Ze],
                    ["large", Ze]
                ]),
                ii = new Map([
                    ["small", Xe],
                    ["medium", Je],
                    ["large", Je]
                ]),
                si = (new Map([
                    ["small", Qe],
                    ["medium", Qe],
                    ["large", Qe]
                ]), new Map([
                    ["small", qe],
                    ["medium", Ke],
                    ["large", Ke]
                ]), Fe.colorsPalette["color-delay-mode"]),
                li = Fe.colorsPalette["color-eod-mode"],
                oi = Fe.colorsPalette["color-notaccurate-mode"],
                ni = (Fe.colorsPalette["color-primary-symbol"], Fe.colorsPalette["color-halal"], k.t(null, void 0, i(57310))),
                ai = k.t(null, void 0, i(59315)),
                ri = k.t(null, void 0, i(15815)),
                di = k.t(null, void 0, i(45e3)),
                ui = k.t(null, void 0, i(7435)),
                hi = (k.t(null, void 0, i(24680)), k.t(null, void 0, i(99214)), k.t(null, void 0, i(6044)), k.t(null, void 0, i(31461)), k.t(null, void 0, i(32960)), k.t(null, void 0, i(52449)), (0, Re.htmlEscape)(k.t(null, void 0, i(11155)))),
                ci = (0, Re.htmlEscape)(k.t(null, void 0, i(1084))),
                _i = (0, Re.htmlEscape)(k.t(null, void 0, i(52984))),
                pi = (0, Re.htmlEscape)(k.t(null, void 0, i(89022))),
                mi = (0, Re.htmlEscape)(k.t(null, void 0, i(52916))),
                gi = (0, Re.htmlEscape)(k.t(null, void 0, i(49321))),
                vi = (0, Re.htmlEscape)(k.t(null, void 0, i(25978))),
                bi = (0, Re.htmlEscape)(k.t(null, void 0, i(28412))),
                wi = (0, Re.htmlEscape)(k.t(null, void 0, i(91459))),
                Si = k.t(null, void 0, i(6667)),
                yi = k.t(null, void 0, i(2310)),
                Mi = k.t(null, void 0, i(29512));
            var Ci = i(56840);
            const Ei = "tv.alreadyBlinkedStatuses",
                fi = [];

            function ki() {
                return Ci.getJSON(Ei, fi)
            }
            const Vi = new(n())(ki());

            function Ai(t) {
                const e = Ci.getJSON(Ei, fi);
                e.includes(t) || (e.push(t), Ci.setJSON(Ei, e), Vi.setValue(ki()))
            }
            Ci.onSync.subscribe(null, (() => Vi.setValue(ki())));
            const Ti = Vi;
            var xi = i(93544);
            const Li = (0,
                    vt.getLogger)("Chart.LegendWidget"),
                Hi = ["TFEXDelayForGuest", "MOEXDelayForGuest", "CHIXAuDelayForGuest", "MILDelayForGuest", "NGMDelayForGuest", "DEForGuest", "ICESGDelayForGuest", "TAIFEXDelayForGuest", "TURQUOISEDelayForGuest", "ADXDelayForGuest", "TRADEGATEDelayForGuest", "LUXSEDelayForGuest", "NSENGDelayForGuest"],
                Wi = new Map([
                    ["DelayToRealtime", ti],
                    ["DelayNoRealtime", ti],
                    ["TFEXDelayForGuest", ti],
                    ["MOEXDelayForGuest", ti],
                    ["CHIXAuDelayForGuest", ti],
                    ["MILDelayForGuest", ti],
                    ["NGMDelayForGuest", ti],
                    ["ICESGDelayForGuest", ti],
                    ["TAIFEXDelayForGuest", ti],
                    ["TURQUOISEDelayForGuest", ti],
                    ["ADXDelayForGuest", ti],
                    ["TRADEGATEDelayForGuest", ti],
                    ["LUXSEDelayForGuest", ti],
                    ["NSENGDelayForGuest", ti],
                    ["DEForGuest", ti],
                    ["EOD", ei],
                    ["TickByTick", ii],
                    ["BATSToRealtime", ii],
                    ["DelayWithoutMarketAgreement", ti]
                ]),
                Di = new Map([
                    ["DelayToRealtime", Ge.delay],
                    ["DelayNoRealtime", Ge.delay],
                    ["TFEXDelayForGuest", Ge.delay],
                    ["MOEXDelayForGuest", Ge.delay],
                    ["CHIXAuDelayForGuest", Ge.delay],
                    ["MILDelayForGuest", Ge.delay],
                    ["NGMDelayForGuest", Ge.delay],
                    ["ICESGDelayForGuest", Ge.delay],
                    ["TAIFEXDelayForGuest", Ge.delay],
                    ["TURQUOISEDelayForGuest", Ge.delay],
                    ["ADXDelayForGuest", Ge.delay],
                    ["TRADEGATEDelayForGuest", Ge.delay],
                    ["LUXSEDelayForGuest", Ge.delay],
                    ["NSENGDelayForGuest", Ge.delay],
                    ["DEForGuest", Ge.delay],
                    ["EOD", Ge.eod],
                    ["TickByTick", Ge.notAccurate],
                    ["BATSToRealtime", Ge.notAccurate],
                    ["DelayWithoutMarketAgreement", Ge.delay]
                ]),
                Bi = new Map([
                    ["DelayToRealtime", si],
                    ["DelayNoRealtime", si],
                    ["TFEXDelayForGuest", si],
                    ["MOEXDelayForGuest", si],
                    ["CHIXAuDelayForGuest", si],
                    ["MILDelayForGuest", si],
                    ["NGMDelayForGuest", si],
                    ["ICESGDelayForGuest", si],
                    ["TAIFEXDelayForGuest", si],
                    ["TURQUOISEDelayForGuest", si],
                    ["ADXDelayForGuest", si],
                    ["TRADEGATEDelayForGuest", si],
                    ["LUXSEDelayForGuest", si],
                    ["NSENGDelayForGuest", si],
                    ["DEForGuest", si],
                    ["EOD", li],
                    ["TickByTick", oi],
                    ["BATSToRealtime", oi],
                    ["DelayWithoutMarketAgreement", si]
                ]);
            k.t(null, void 0, i(36004)), k.t(null, void 0, i(18429)), (0, Re.htmlEscape)(k.t(null, void 0, i(25046)));
            class Pi extends Ue {
                constructor(t, e, i) {
                    super({
                        iconMap: Wi,
                        classNameMap: Di,
                        titleColorMap: Bi,
                        size: e
                    }), this._dataUpdatedInfo = new(n())(null).spawn(), this._options = i, this._model = t, this._dataModeBlinkingStatuses = Ti.spawn(), this._dataModeBlinkingStatuses.subscribe(this._updateBlinkingMode.bind(this)), this.turnOffBlinkingMode = this._turnOffBlinking.bind(this), this.setModel(t)
                }
                destroy() {
                    this._dataUpdatedInfo.destroy(), this._dataModeBlinkingStatuses.destroy()
                }
                setModel(t) {
                    if (this._dataUpdatedInfo.destroy(), null === t) return this._model = t, void(this._dataUpdatedInfo = new(n())(null).spawn());
                    this._dataUpdatedInfo = t.status().spawn(), this._dataUpdatedInfo.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _shouldBeHiddenByStatus(t) {
                    var e;
                    return !!(null === (e = this._options.shouldBeHiddenRegardlessOfStatus) || void 0 === e ? void 0 : e.value()) || super._shouldBeHiddenByStatus(t)
                }
                _getTooltip() {
                    const t = this._getShortTexts();
                    return null === t ? null : Object.values(t).join(" · ")
                }
                async _updateFullTooltip() {
                    const t = this._dataUpdatedInfo.value(),
                        e = this._status.value();
                    if (null === t || null === e) return void this._fullTooltip.setValue(null);
                    const i = this._getShortTexts(),
                        [s, l] = await Promise.all([this._getHtmls(), this._getActions()]);
                    if (t !== this._dataUpdatedInfo.value()) return;
                    const o = [];
                    for (const n of t) {
                        const t = n.mode;
                        o.push({
                            icon: this._getIcon(t),
                            iconClassName: this._getFullTooltipIconClassNames(e),
                            title: i && i[t],
                            titleColor: this._getTitleColor(t),
                            html: s && s[t],
                            size: this._size,
                            action: l && l[t]
                        })
                    }
                    this._fullTooltip.setValue(o)
                }
                _updateStatus(t) {
                    var e;
                    const i = null !== t ? t[0] : null;
                    this._status.setValue(null !== (e = null == i ? void 0 : i.mode) && void 0 !== e ? e : null, !0), this._updateBlinkingMode()
                }
                async _getHtmls() {
                    var t, e;
                    const s = this._dataUpdatedInfo.value();
                    if (null === s || null === this._model) return Promise.resolve(null);
                    const l = {},
                        o = this._model.symbolName();
                    let n = null,
                        a = null;
                    try {
                        n = await this._model.description(), a = this._model.exchange()
                    } catch (t) {
                        Li.logError(`Can't get exchange description, reason: ${(0,xi.errorToString)(t)}`)
                    }
                    for (const r of s) {
                        const s = r.mode;
                        if (l[s] = [], ["DelayToRealtime", "DelayNoRealtime", "DelayWithoutMarketAgreement", ...Hi].includes(s) && (l[s].push(hi.format({
                                symbolName: o,
                                time: this._model.time().toString()
                            })), this._options.subscriptionFullInfo && null !== n && "DelayToRealtime" === s && l[s].push(_i.format({
                                description: `<b>${n}</b>`
                            })), "DelayNoRealtime" === s && l[s].push(pi), "DelayWithoutMarketAgreement" === s && l[s].push(wi.format({
                                listedExchange: this._model.listedExchange()
                            })), this._options.subscriptionFullInfo && Hi.includes(s) && l[s].push(ci.format({
                                listedExchange: this._model.listedExchange()
                            }))), "EOD" === s && (l[s] = [mi]), "TickByTick" === s) {
                            const o = void 0 === r.updatePeriod ? gi : (0, Re.htmlEscape)(k.t(null, {
                                    count: r.updatePeriod,
                                    replace: {
                                        amount: (null !== (t = r.updatePeriod) && void 0 !== t ? t : 1).toString()
                                    },
                                    plural: "Data on our Basic plan is updated once every {amount} seconds, even if there are more updates on the market."
                                }, i(2121))),
                                n = void 0 === r.updatePeriod ? vi : (0, Re.htmlEscape)(k.t(null, {
                                    count: r.updatePeriod,
                                    replace: {
                                        amount: (null !== (e = r.updatePeriod) && void 0 !== e ? e : 1).toString()
                                    },
                                    plural: "Data is updated once every {amount} seconds, even if there are more updates on the market."
                                }, i(77033)));
                            l[s].push(this._options.subscriptionFullInfo ? o : n), this._options.subscriptionFullInfo && l[s].push(bi)
                        }
                        if (null !== a && "BATSToRealtime" === s) {
                            let t = this._model.listedExchange();
                            0, l[s].push(Si.format({
                                symbolName: o,
                                exchange: a
                            }), "" !== t ? (0, Re.htmlEscape)(Mi).format({
                                exchange: t
                            }) : (0, Re.htmlEscape)(yi))
                        }
                    }
                    return Object.keys(l).length > 0 ? l : null
                }
                async _getActions() {
                    if (null === this._dataUpdatedInfo.value() || null === this._model) return null;
                    const t = {};
                    return Object.keys(t).length > 0 ? t : null
                }
                _getShortTexts() {
                    var t, e;
                    const s = this._dataUpdatedInfo.value();
                    if (null === s || null === this._model) return null;
                    const l = {};
                    for (const o of s) {
                        const s = o.mode;
                        if (["DelayToRealtime", "DelayNoRealtime", ...Hi, "DelayWithoutMarketAgreement"].includes(s) && (l[s] = ni), "EOD" === s && (l[s] = ai), "TickByTick" === s) {
                            const e = void 0 === o.updatePeriod ? ri : (0, Re.htmlEscape)(k.t(null, {
                                plural: "One update every {amount} seconds",
                                count: o.updatePeriod,
                                replace: {
                                    amount: (null !== (t = o.updatePeriod) && void 0 !== t ? t : 1).toString()
                                }
                            }, i(5223)));
                            l[s] = e
                        }
                        if ("BATSToRealtime" === s) {
                            let t = null !== (e = this._model.firstReplacedByBatsExchange()) && void 0 !== e ? e : "";
                            0, l[s] = "" !== t ? ui.format({
                                exchange: t,
                                originalExchange: di
                            }) : di
                        }
                    }
                    return Object.keys(l).length > 0 ? l : null
                }
                _updateBlinkingMode() {
                    const t = this._dataUpdatedInfo.value();
                    if (null === t) return;
                    const e = this._dataModeBlinkingStatuses.value();
                    for (const i of t)
                        if (!e.includes(i.mode)) return void this.isBlinkingMode.setValue(!0);
                    this.isBlinkingMode.setValue(!1)
                }
                _turnOffBlinking() {
                    const t = this._dataUpdatedInfo.value();
                    if (null !== t)
                        for (const e of t) Ai(e.mode)
                }
            }
            var zi = i(38373),
                Ii = i(79304);
            const Ni = k.t(null, void 0, i(39045)),
                Oi = new Map([
                    [!0, new Map([
                        ["small", zi],
                        ["medium", Ii],
                        ["large", Ii]
                    ])],
                    [!1, new Map([
                        ["small", ""],
                        ["medium", ""],
                        ["large", ""]
                    ])]
                ]),
                Fi = new Map([
                    [!0, Ge.dataProblemLow],
                    [!1, null]
                ]),
                Ri = new Map([
                    [!0, Ni],
                    [!1, null]
                ]),
                Gi = new Map([
                    [!0, Ni],
                    [!1, null]
                ]),
                Ui = new Map([
                    [!0, Fe.colorsPalette["color-data-problem"]],
                    [!1, null]
                ]);
            class ji extends Ue {
                constructor(t, e, i) {
                    super({
                        iconMap: Oi,
                        classNameMap: Fi,
                        tooltipMap: Ri,
                        titleMap: Gi,
                        titleColorMap: Ui,
                        size: e
                    }), this._dataSourceErrorStatus = new(n())(null).spawn(), this._lastError = null, this._options = i, this.setSource(t)
                }
                destroy() {
                    this._dataSourceErrorStatus.destroy()
                }
                setSource(t) {
                    this._dataSourceErrorStatus.destroy(), this._dataSourceErrorStatus = t.errorStatus().spawn(), this._dataSourceErrorStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _getTooltip(t) {
                    var e;
                    return null !== (e = t ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== e ? e : super._getTooltip(t)
                }
                _getTitle(t) {
                    var e;
                    return null !== (e = t ? this._getDataSourceErrorStatusCustomTitle() : null) && void 0 !== e ? e : super._getTitle(t)
                }
                async _updateFullTooltip() {
                    const t = this._status.value(),
                        e = this._dataSourceErrorStatus.value();
                    null !== t && null !== e ? this._fullTooltip.setValue([{
                        icon: this._getIcon(t),
                        iconClassName: this._getFullTooltipIconClassNames(t),
                        title: this._getTitle(t),
                        titleColor: this._getTitleColor(t),
                        html: [(0, Re.htmlEscape)(e.error)],
                        size: this._size,
                        action: this._getAction(t)
                    }]) : this._fullTooltip.setValue(null)
                }
                _getAction(t) {
                    return null
                }
                _updateStatus(t) {
                    const e = this._status.value();
                    null !== t ? (this._status.setValue(!0), e && this._lastError !== t.error && this._updateByStatus(!0), this._lastError = t.error) : (this._status.setValue(null), this._lastError = null)
                }
                _getDataSourceErrorStatusCustomTitle() {
                    var t;
                    return (null === (t = this._dataSourceErrorStatus.value()) || void 0 === t ? void 0 : t.title) || null
                }
            }
            const $i = k.t(null, void 0, i(97325)),
                Yi = new Map([
                    ["high", new Map([
                        ["small", zi],
                        ["medium", Ii],
                        ["large", Ii]
                    ])],
                    ["low", new Map([
                        ["small", zi],
                        ["medium", Ii],
                        ["large", Ii]
                    ])]
                ]),
                Zi = new Map([
                    ["high", Ge.dataProblemHigh],
                    ["low", Ge.dataProblemLow]
                ]),
                Xi = new Map([
                    ["high", $i],
                    ["low", $i]
                ]),
                Ji = new Map([
                    ["high", Fe.colorsPalette["color-data-problem"]],
                    ["low", Fe.colorsPalette["color-data-problem"]]
                ]);
            class Qi extends Ue {
                constructor(t, e) {
                    super({
                        tooltipMap: Xi,
                        iconMap: Yi,
                        classNameMap: Zi,
                        titleMap: Xi,
                        titleColorMap: Ji,
                        size: e
                    }), this._dataProblems = new(n())([]).spawn(), this._isDataProblemCritical = new(n())(!1), this.setModel(t)
                }
                destroy() {
                    this._dataProblems.destroy()
                }
                isDataProblemCritical() {
                    return this._isDataProblemCritical
                }
                setModel(t) {
                    this._dataProblems.destroy(), null !== t ? (this._dataProblems = t.dataProblems().spawn(), this._dataProblems.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })) : this._dataProblems = new(n())([]).spawn()
                }
                async _updateFullTooltip() {
                    const t = this.status().value(),
                        e = this._dataProblems.value();
                    if (null === t || 0 === e.length) return void this._fullTooltip.setValue(null);
                    const i = e.map(((e, i) => {
                        var s;
                        return {
                            icon: this._getIcon(t),
                            iconClassName: this._getFullTooltipIconClassNames(t),
                            title: null !== (s = e.title) && void 0 !== s ? s : 0 === i ? this._getTitle(t) : null,
                            titleColor: this._getTitleColor(t),
                            html: [(0, Re.htmlEscape)(e.text)],
                            size: this._size,
                            action: this._getAction(t)
                        }
                    }));
                    this._fullTooltip.setValue(i)
                }
                _getTooltip(t) {
                    var e;
                    return null !== (e = this._getDataProblemCustomTitle()) && void 0 !== e ? e : super._getTooltip(t)
                }
                _getTitle(t) {
                    var e;
                    return null !== (e = this._getDataProblemCustomTitle()) && void 0 !== e ? e : super._getTitle(t)
                }
                _updateStatus(t) {
                    var e, i;
                    const s = null !== (i = null === (e = t[0]) || void 0 === e ? void 0 : e.severity) && void 0 !== i ? i : null,
                        l = this._status.value() !== s;
                    this._status.setValue(s), this._isDataProblemCritical.setValue(function (t) {
                        return "high" === t
                    }(s)), l || this._updateFullTooltip()
                }
                _getDataProblemCustomTitle() {
                    var t, e;
                    return (null === (e = null === (t = this._dataProblems.value()) || void 0 === t ? void 0 : t[0]) || void 0 === e ? void 0 : e.title) || null
                }
            }
            class qi extends Ue {
                constructor(t, e) {
                    super(e), this._booleanStatus = new(n())(!1).spawn(), this.updateStatus(t)
                }
                destroy() {
                    this._booleanStatus.destroy()
                }
                updateStatus(t) {
                    this._booleanStatus.destroy(), this._booleanStatus = t.spawn(), this._booleanStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    })
                }
                _updateStatus(t) {
                    t ? this._status.setValue(!0) : this._status.setValue(null)
                }
            }
            var Ki = i(73710),
                ts = i(45503);
            const es = k.t(null, void 0, i(14177)),
                is = k.t(null, void 0, i(73717)),
                ss = new Map([
                    [!0, new Map([
                        ["small", Ki],
                        ["medium", ts],
                        ["large", ts]
                    ])],
                    [!1, new Map([
                        ["small", ""],
                        ["medium", ""],
                        ["large", ""]
                    ])]
                ]),
                ls = new Map([
                    [!0, Ge.invalidSymbol],
                    [!1, null]
                ]),
                os = new Map([
                    [!0, es],
                    [!1, null]
                ]),
                ns = new Map([
                    [!0, es],
                    [!1, null]
                ]),
                as = new Map([
                    [!0, Fe.colorsPalette["color-invalid-symbol"]],
                    [!1, null]
                ]),
                rs = new Map([
                    [!0, [is]],
                    [!1, null]
                ]),
                ds = new Map([
                    [!0, null],
                    [!1, null]
                ]);
            class us {
                constructor(t) {
                    this._el = document.createElement("div"), this._prevCustomClass = null, this._prevCustomColor = null, this._customColor = null, this._icon = t.icon.spawn(), this._icon.subscribe(this._updateIcon.bind(this), {
                        callWithLast: !0
                    }), this._className = t.className.spawn(), this._className.subscribe(this._updateClassName.bind(this), {
                        callWithLast: !0
                    }), this._customColor = t.customColor.spawn(), this._customColor.subscribe(this._updateCustomColor.bind(this), {
                        callWithLast: !0
                    }), this._visible = t.visible.spawn(), this._visible.subscribe(this._updateVisibility.bind(this), {
                        callWithLast: !0
                    }), this._size = t.size || "small", this._render(t.parentEl), t.isBlinking && (this._isBlinking = t.isBlinking.spawn(), this._isBlinking.subscribe(this._updateBlinkingMode.bind(this), {
                        callWithLast: !0
                    }), this._turnOffBlinking = t.turnOffBlinking)
                }
                destroy() {
                    this._visible.destroy(), this._icon.destroy(), this._isBlinking && this._isBlinking.destroy(), this._el.remove()
                }
                onClick() {
                    this._turnOffBlinking && this._turnOffBlinking()
                }
                visible() {
                    return this._visible
                }
                _render(t) {
                    this._el.classList.add(Ge.statusItem, Ge[this._size]), t.appendChild(this._el)
                }
                _updateVisibility(t) {
                    this._el.classList.toggle("js-hidden", !t)
                }
                _updateIcon(t) {
                    this._el.innerHTML = t || ""
                }
                _updateClassName(t) {
                    this._prevCustomClass !== t && (null !== this._prevCustomClass && this._el.classList.remove(this._prevCustomClass), null !== t && this._el.classList.add(t), this._prevCustomClass = t)
                }
                _updateCustomColor(t) {
                    this._prevCustomColor !== t && (this._el.style.setProperty("--custom-status-color", t), this._prevCustomColor = t)
                }
                _updateBlinkingMode(t) {
                    this._el.classList.toggle(Ge.blinking, t)
                }
            }
            class hs {
                constructor(t, e, i, s) {
                    this.element = document.createElement("div"), this._blinkingSpawns = [], this._iconsRenderers = [];
                    const l = [Ge.statuses, "apply-common-tooltip", "common-tooltip-wide"];
                    h.trackingModeIsAvailable && l.push(Ge.touchMode), this.element.classList.add(...l, Ge[t]), this._visibleWidgetsCount = e.spawn(), this._visibleWidgetsCount.subscribe(this._updateSpecialClassAndTooltip.bind(this)), this._tooltips = i.spawn(), this._tooltips.subscribe(this._updateTooltip.bind(this)), this._onClickCallback = s.onClick, this._onClickHandler = this._onClick.bind(this), this.element.addEventListener("click", this._onClickHandler)
                }
                destroy() {
                    for (const t of this._iconsRenderers) t.destroy();
                    for (const t of this._blinkingSpawns) t.destroy();
                    this._visibleWidgetsCount.destroy(), this._tooltips.destroy(), this.element.removeEventListener("click", this._onClickHandler), this.element.remove()
                }
                addStatusModel(t) {
                    this._iconsRenderers.push(new us({
                        visible: t.visible,
                        icon: t.model.icon(),
                        className: t.model.className(),
                        size: t.model.size(),
                        parentEl: this.element,
                        isBlinking: t.model.isBlinkingMode,
                        turnOffBlinking: t.model.turnOffBlinkingMode,
                        customColor: t.model.customColor()
                    }));
                    const e = t.model.isBlinkingMode.spawn();
                    e.subscribe(this._updateBlinkingMode.bind(this)), this._blinkingSpawns.push(e), this._updateBlinkingMode()
                }
                _onClick(t) {
                    t.preventDefault();
                    const e = this._iconsRenderers.filter((t => t.visible().value()));
                    for (const t of e) t.onClick();
                    let i = 14;
                    e.length > 1 && (i -= 2);
                    const s = this.element.getBoundingClientRect(),
                        l = {
                            x: s.left - i,
                            y: s.bottom + 4
                        };
                    this._onClickCallback(l)
                }
                _updateTooltip() {
                    this.element.setAttribute("title", this._tooltips.value().join(" · "))
                }
                _updateSpecialClassAndTooltip() {
                    const t = this._visibleWidgetsCount.value();
                    this.element.classList.toggle(Ge.oneWidgetsVisible, 1 === t), this.element.classList.toggle(Ge.twoWidgetsVisible, 2 === t), this.element.classList.toggle(Ge.threeWidgetsVisible, 3 === t), this._updateTooltip()
                }
                _updateBlinkingMode() {
                    const t = this._blinkingSpawns.some((t => t.value()));
                    this.element.classList.toggle(Ge.blinking, t)
                }
            }
            class cs {
                constructor(t, e) {
                    this.isBlinkingMode = new(n())(!1), this._status = new(n())(null), this._size = "small", this._fullInfo = new(n())(null), this._className = new(n())(Ge.marketStatusCustom), this._symbolModel = null, this._symbol = null, this._tooltip = new(n())(null), this._icon = new(n())(null),
                        this._visible = new(n())(!1), this._color = new(n())(null), this._updateVisibleCallback = this._updateVisible.bind(this), this._updateColorCallback = this._updateColor.bind(this), this._updateIconCallback = this._updateIcon.bind(this), this._updateTooltipCallback = this._updateTooltip.bind(this), this._updateFullInfoCallback = this._updateFullInfo.bind(this), this._model = t, this._size = e
                }
                turnOffBlinkingMode() {}
                destroy() {}
                setModel(t) {
                    this._model = t
                }
                setSymbol(t) {
                    t !== this._symbol && (this._unSyncModel(), this._symbol = t, t ? (this._symbolModel = this._model.getSymbolCustomStatus(t), this._syncModel()) : this._symbolModel = null)
                }
                status() {
                    return this._status.spawn()
                }
                tooltip() {
                    return this._tooltip.spawn()
                }
                icon() {
                    return this._icon.spawn()
                }
                className() {
                    return this._className.spawn()
                }
                visible() {
                    return this._visible.spawn()
                }
                size() {
                    return this._size
                }
                fullInfo() {
                    return this._fullInfo.spawn()
                }
                customColor() {
                    return this._color.spawn()
                }
                _updateFullInfo(t) {
                    if (null === t) return void this._fullInfo.setValue(null);
                    const e = t.map((t => {
                        var e, i;
                        return {
                            icon: null !== (e = t.icon) && void 0 !== e ? e : this.icon().value(),
                            iconClassName: [Ge.marketStatusCustom],
                            title: t.title,
                            titleColor: null !== (i = t.color) && void 0 !== i ? i : this.customColor().value(),
                            html: t.content,
                            size: this.size(),
                            action: this._buildAction(t.action)
                        }
                    }));
                    this._fullInfo.setValue(e)
                }
                _buildAction(t) {
                    var e;
                    return t && t.onClick ? {
                        text: null !== (e = t.text) && void 0 !== e ? e : "",
                        tooltip: t.tooltip,
                        onClick: t.onClick
                    } : null
                }
                _unSyncModel() {
                    this._symbolModel && (this._symbolModel.visible().unsubscribe(this._updateVisibleCallback), this._symbolModel.color().unsubscribe(this._updateColorCallback), this._symbolModel.icon().unsubscribe(this._updateIconCallback), this._symbolModel.tooltip().unsubscribe(this._updateTooltipCallback), this._symbolModel.tooltipContent().unsubscribe(this._updateFullInfoCallback))
                }
                _syncModel() {
                    var t, e, i, s, l, o, n, a, r, d;
                    this._visible.setValue(null !== (e = null === (t = this._symbolModel) || void 0 === t ? void 0 : t.visible().value()) && void 0 !== e && e), this._color.setValue(null !== (s = null === (i = this._symbolModel) || void 0 === i ? void 0 : i.color().value()) && void 0 !== s ? s : null), this._icon.setValue(null !== (o = null === (l = this._symbolModel) || void 0 === l ? void 0 : l.icon().value()) && void 0 !== o ? o : null), this._tooltip.setValue(null !== (a = null === (n = this._symbolModel) || void 0 === n ? void 0 : n.tooltip().value()) && void 0 !== a ? a : null), this._updateFullInfo(null !== (d = null === (r = this._symbolModel) || void 0 === r ? void 0 : r.tooltipContent().value()) && void 0 !== d ? d : null), this._symbolModel && (this._symbolModel.visible().subscribe(this._updateVisibleCallback), this._symbolModel.color().subscribe(this._updateColorCallback), this._symbolModel.icon().subscribe(this._updateIconCallback), this._symbolModel.tooltip().subscribe(this._updateTooltipCallback), this._symbolModel.tooltipContent().subscribe(this._updateFullInfoCallback))
                }
                _updateVisible(t) {
                    this._visible.setValue(t)
                }
                _updateColor(t) {
                    this._color.setValue(t)
                }
                _updateIcon(t) {
                    this._icon.setValue(t)
                }
                _updateTooltip(t) {
                    this._tooltip.setValue(t)
                }
            }
            var _s = i(75593),
                ps = i(53218),
                ms = i(32140),
                gs = i(62998),
                vs = i(25230),
                bs = i(15507),
                ws = i(43401),
                Ss = i(85290),
                ys = i(12462);
            const Ms = k.t(null, void 0, i(83949)),
                Cs = k.t(null, void 0, i(56042)),
                Es = k.t(null, void 0, i(29985)),
                fs = k.t(null, void 0, i(95814)),
                ks = k.t(null, void 0, i(88958)),
                Vs = k.t(null, void 0, i(69419)),
                As = k.t(null, void 0, i(1653)),
                Ts = k.t(null, void 0, i(40519)),
                xs = k.t(null, void 0, i(57048)),
                Ls = k.t(null, void 0, i(56086)),
                Hs = k.t(null, void 0, i(39348)),
                Ws = k.t(null, void 0, i(7827)),
                Ds = k.t(null, void 0, i(19830)),
                Bs = k.t(null, void 0, i(35701)),
                Ps = k.t(null, void 0, i(98105)),
                zs = k.t(null, void 0, i(50634)),
                Is = k.t(null, void 0, i(74537)),
                Ns = new Map([
                    ["market", new Map([
                        ["small", ms],
                        ["medium", gs],
                        ["large", gs]
                    ])],
                    ["pre_market", new Map([
                        ["small", Ss],
                        ["medium", ys],
                        ["large", ys]
                    ])],
                    ["post_market", new Map([
                        ["small", bs],
                        ["medium", ws],
                        ["large", ws]
                    ])],
                    ["out_of_session", new Map([
                        ["small", ps],
                        ["medium", ps],
                        ["large", ps]
                    ])],
                    ["holiday", new Map([
                        ["small", vs],
                        ["medium", vs],
                        ["large", vs]
                    ])]
                ]),
                Os = new Map([
                    ["market", Ge.marketStatusOpen],
                    ["pre_market", Ge.marketStatusPre],
                    ["post_market", Ge.marketStatusPost],
                    ["out_of_session", Ge.marketStatusClose],
                    ["holiday", Ge.marketStatusHoliday]
                ]),
                Fs = new Map([
                    ["market", Ms],
                    ["pre_market", Cs],
                    ["post_market", Es],
                    ["out_of_session", fs],
                    ["holiday", ks]
                ]),
                Rs = new Map([
                    ["market", Ms],
                    ["pre_market", Cs],
                    ["post_market", Es],
                    ["out_of_session", fs],
                    ["holiday", ks]
                ]),
                Gs = new Map([
                    ["market", Fe.colorsPalette["color-market-open"]],
                    ["pre_market", Fe.colorsPalette["color-pre-market"]],
                    ["post_market", Fe.colorsPalette["color-post-market"]],
                    ["out_of_session", Fe.colorsPalette["color-market-closed"]],
                    ["holiday", Fe.colorsPalette["color-market-holiday"]]
                ]),
                Us = {
                    market: Vs,
                    pre_market: As,
                    post_market: Ts,
                    out_of_session: xs,
                    holiday: Ls
                };

            function js(t) {
                return k.t(null, {
                    plural: "{number} minutes",
                    count: t
                }, i(67151)).format({
                    number: t.toString()
                })
            }

            function $s(t) {
                return k.t(null, {
                    plural: "{number} hours",
                    count: t
                }, i(24430)).format({
                    number: t.toString()
                })
            }

            function Ys(t) {
                const e = Math.floor(t / 86400),
                    s = Math.floor((t - 86400 * e) / 3600),
                    l = Math.floor((t - 86400 * e - 3600 * s) / 60);
                return 0 === e && 0 === s && 0 === l ? Hs : e > 0 ? Ws.format({
                    days: (o = e, k.t(null, {
                        plural: "{number} days",
                        count: o
                    }, i(58609)).format({
                        number: o.toString()
                    })),
                    hours: $s(s)
                }) : s > 0 ? Ds.format({
                    hours: $s(s),
                    minutes: js(l)
                }) : js(l);
                var o
            }
            const Zs = {
                    market: t => ("post_market" === t.status ? zs : Ps).format({
                        remainingTime: Ys(t.remainingSeconds)
                    }),
                    pre_market: t => Bs.format({
                        remainingTime: Ys(t.remainingSeconds)
                    }),
                    post_market: t => Ps.format({
                        remainingTime: Ys(t.remainingSeconds)
                    }),
                    out_of_session: t => ("pre_market" === t.status ? Is : Bs).format({
                        remainingTime: Ys(t.remainingSeconds)
                    }),
                    holiday: t => ("pre_market" === t.status ? Is : Bs).format({
                        remainingTime: Ys(t.remainingSeconds)
                    })
                },
                Xs = new Map([
                    ["market", null],
                    ["pre_market", null],
                    ["post_market", null],
                    ["out_of_session", null],
                    ["holiday", null]
                ]);
            class Js extends Ue {
                constructor(t, e) {
                    super({
                        tooltipMap: Fs,
                        iconMap: Ns,
                        classNameMap: Os,
                        titleMap: Rs,
                        titleColorMap: Gs,
                        actionMap: Xs,
                        size: e
                    }), this._model = null, this._expiredStatus = null, this._marketStatus = new(n())(null).spawn(), this._sessionEdge = new(n())(null).spawn(), this.setModel(t), zt.showMarketOpenStatusProperty.subscribe(this, this._showMarketOpenStatusPropertyChanged)
                }
                destroy() {
                    this._marketStatus.destroy(),
                        this._sessionEdge.destroy(), this._model = null, zt.showMarketOpenStatusProperty.unsubscribeAll(this)
                }
                setModel(t) {
                    var e;
                    if (this._marketStatus.destroy(), this._sessionEdge.destroy(), null === (e = this._expiredStatus) || void 0 === e || e.destroy(), null === t) return this._marketStatus = new(n())(null).spawn(), this._sessionEdge = new(n())(null).spawn(), void(this._expiredStatus = null);
                    this._model = t;
                    const i = t.futuresContractExpirationTime();
                    i && (this._expiredStatus = i.expired().spawn(), this._expiredStatus.subscribe((t => {
                        t && this._updateByStatus(this._marketStatus.value())
                    }))), this._marketStatus = t.status().spawn(), this._marketStatus.subscribe(this._updateStatus.bind(this), {
                        callWithLast: !0
                    }), this._sessionEdge = t.nextSessionEdge().spawn(), this._sessionEdge.subscribe(this._updateTooltip.bind(this)), this._updateTooltip()
                }
                async _updateFullTooltip() {
                    const t = this.status().value();
                    if (null === t) return void this._fullTooltip.setValue(null);
                    let e;
                    if (this._isExpiredFutures()) e = [(0, Re.htmlEscape)(expiredHtml)];
                    else {
                        e = [(0, Re.htmlEscape)(Us[t])];
                        const i = this._marketStatus.value();
                        if (null !== this._model && null !== i) {
                            const i = this._model.nextSessionEdge().value();
                            null !== i && e.push({
                                text: Zs[t](i),
                                bold: !0
                            })
                        }
                    }
                    this._fullTooltip.setValue([{
                        icon: this._getIcon(t),
                        iconClassName: this._getFullTooltipIconClassNames(t),
                        title: this._getTitle(t),
                        titleColor: this._getTitleColor(t),
                        html: e,
                        size: this._size,
                        action: this._getAction(t)
                    }])
                }
                _shouldBeHiddenByStatus(t) {
                    return !zt.showMarketOpenStatusProperty.value() && "market" === t
                }
                _getTooltip(t) {
                    return this._isExpiredFutures() ? expiredTooltip : super._getTooltip(t)
                }
                _getIcon(t) {
                    return this._isExpiredFutures() ? expiredIconMap.get(this._size) || null : super._getIcon(t)
                }
                _getClassName(t) {
                    return this._isExpiredFutures() ? expiredClassName : super._getClassName(t)
                }
                _getTitle(t) {
                    return this._isExpiredFutures() ? expiredTitle : super._getTitle(t)
                }
                _getTitleColor(t) {
                    return this._isExpiredFutures() ? expiredTitleColor : super._getTitleColor(t)
                }
                _isExpiredFutures() {
                    var t, e, i;
                    return null !== (i = null === (e = null === (t = this._model) || void 0 === t ? void 0 : t.futuresContractExpirationTime()) || void 0 === e ? void 0 : e.expired().value()) && void 0 !== i && i
                }
                _updateStatus(t) {
                    this._status.setValue(t)
                }
                _updateTooltip() {
                    this._updateFullTooltip()
                }
                _showMarketOpenStatusPropertyChanged() {
                    this._updateByStatus(this._status.value())
                }
            }
            class Qs {
                constructor(t, e) {
                    var i, s;
                    this.visibleWidgetsCount = new(n())(0), this.errorWidgetIsShown = new(n())(!1), this._size = h.trackingModeIsAvailable ? "medium" : "small", this._tooltips = new(n())([]), this._visibilitySpawns = [], this._tooltipSpawns = [], this._statusWidgetInfos = [], this._renderer = new hs(this._size, this.visibleWidgetsCount, this._tooltips, {
                            onClick: this._handleToggleDropdown.bind(this)
                        }), this._symbolInvalidViewModel = null, this._dataSourceErrorStatusViewModel = null, this._marketStatusViewModel = null, this._dataUpdatedModeViewModel = null, this._dataProblemViewModel = null, this._customStatusViewModel = null, this._sessionWidget = null, this._dataSourceHasErrorVisible = null, this._dataSourceErrorCanBeShown = new(n())(!1), this._marketStatusCanBeShown = new(n())(!1), this._dataUpdatedModeCanBeShown = new(n())(!1),
                        this._dataProblemCanBeShown = new(n())(!1), this._isDataProblemCritical = null, this._container = document.createElement("div"), this._menuOpened = !1, this._menuPosition = null, this._handleDropdownMenuClose = () => {
                            var t;
                            this._menuOpened = !1, null === (t = this._source.symbol()) || void 0 === t || t.unsubscribe(this._handleDropdownMenuClose), this._updateDropdownMenu()
                        }, this._source = t, this._symbol = null !== (s = null === (i = t.symbol()) || void 0 === i ? void 0 : i.spawn()) && void 0 !== s ? s : null, this._options = e, this._recreateWidgets(), this._symbol && this._symbol.subscribe(this._recreateAndUpdateWidgetState.bind(this)), this._addSubscriptionForSymbolInvalid(), null !== this._dataSourceHasErrorVisible && (this._dataSourceHasErrorVisible.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), this._dataSourceHasErrorVisible.subscribe(this._updateErrorWidgetIsShown.bind(this))), this._options.dataProblemEnabled && null !== this._isDataProblemCritical && this._isDataProblemCritical.subscribe(this._updateStatusWidgetsVisibilities.bind(this));
                    for (const t of this._tooltipSpawns) t.subscribe(this._updateTooltips.bind(this));
                    for (const t of this._visibilitySpawns) t.subscribe(this._updateVisibleWidgetsCount.bind(this)), t.subscribe(this._updateTooltips.bind(this));
                    this._updateErrorWidgetIsShown(), this._updateStatusWidgetsVisibilities(), this._updateVisibleWidgetsCount(), this._updateTooltips()
                }
                destroy() {
                    var t, e;
                    this._source.destroy(), null === (t = this._symbol) || void 0 === t || t.destroy(), null === (e = this._isDataProblemCritical) || void 0 === e || e.destroy();
                    for (const t of this._tooltipSpawns) t.destroy();
                    for (const t of this._visibilitySpawns) t.destroy();
                    this.visibleWidgetsCount.unsubscribe();
                    for (const t of this._statusWidgetInfos) t.model.destroy();
                    this._renderer.destroy()
                }
                getElement() {
                    return this._renderer.element
                }
                updateSource(t) {
                    var e, i, s;
                    this._source !== t && (null === (e = this._symbol) || void 0 === e || e.destroy(), this._source.destroy(), this._source = t, this._symbol = null !== (s = null === (i = t.symbol()) || void 0 === i ? void 0 : i.spawn()) && void 0 !== s ? s : null, this._recreateAndUpdateWidgetState())
                }
                _updateStatusWidgetsVisibilities() {
                    const t = this._isForceStatusActive();
                    this._dataSourceErrorCanBeShown.setValue(!t), this._marketStatusCanBeShown.setValue(!t), this._dataUpdatedModeCanBeShown.setValue(!t), this._dataProblemCanBeShown.setValue(!this._isPrimaryWidgetShown())
                }
                _isPrimaryWidgetShown() {
                    var t, e;
                    return null !== (e = null === (t = this._source.isSymbolInvalid()) || void 0 === t ? void 0 : t.value()) && void 0 !== e && e
                }
                _isForceStatusActive() {
                    var t, e;
                    return this._isPrimaryWidgetShown() || null !== (e = null === (t = this._isDataProblemCritical) || void 0 === t ? void 0 : t.value()) && void 0 !== e && e
                }
                _updateVisibleWidgetsCount() {
                    const t = this._statusWidgetInfos.filter((t => t.visible.value()));
                    this.visibleWidgetsCount.setValue(t.length)
                }
                _updateTooltips() {
                    const t = [];
                    for (let e = 0; e < this._tooltipSpawns.length; e++) {
                        if (!this._visibilitySpawns[e].value()) continue;
                        const i = this._tooltipSpawns[e].value();
                        null !== i && i.length > 0 && t.push(i)
                    }
                    this._tooltips.setValue(t)
                }
                _recreateAndUpdateWidgetState() {
                    this._recreateWidgets(), this._updateStatusWidgetsVisibilities(),
                        this._updateErrorWidgetIsShown(), this._updateVisibleWidgetsCount(), this._updateTooltips()
                }
                _recreateWidgets() {
                    var t, e, i, s, o, n, a, r;
                    if (this._options.sourceStatusesEnabled) {
                        const t = this._source.isSymbolInvalid();
                        if (null !== t)
                            if (null === this._symbolInvalidViewModel) {
                                this._symbolInvalidViewModel = new qi(t, {
                                    tooltipMap: os,
                                    iconMap: ss,
                                    classNameMap: ls,
                                    titleMap: ns,
                                    titleColorMap: as,
                                    htmlMap: rs,
                                    actionMap: ds,
                                    size: this._size
                                });
                                const e = this._symbolInvalidViewModel.visible().spawn();
                                this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._symbolInvalidViewModel.tooltip().spawn());
                                const i = {
                                    visible: e,
                                    model: this._symbolInvalidViewModel
                                };
                                this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
                            } else this._symbolInvalidViewModel.updateStatus(t), this._addSubscriptionForSymbolInvalid();
                        if (null === this._dataSourceErrorStatusViewModel) {
                            this._dataSourceErrorStatusViewModel = new ji(this._source, this._size, this._options.sourceStatuses), this._dataSourceHasErrorVisible = (0, J.combine)((() => this._dataSourceErrorCanBeShown.value() && (0, l.ensureNotNull)(this._dataSourceErrorStatusViewModel).visible().value()), this._dataSourceErrorCanBeShown, this._dataSourceErrorStatusViewModel.visible()), this._visibilitySpawns.push(this._dataSourceHasErrorVisible), this._tooltipSpawns.push(this._dataSourceErrorStatusViewModel.tooltip().spawn());
                            const t = {
                                visible: this._dataSourceHasErrorVisible,
                                model: this._dataSourceErrorStatusViewModel
                            };
                            this._statusWidgetInfos.push(t), this._renderer.addStatusModel(t)
                        } else this._dataSourceErrorStatusViewModel.setSource(this._source)
                    }
                    if (this._options.marketStatusEnabled) {
                        const e = this._source.marketStatusModel();
                        if (null === this._marketStatusViewModel) {
                            this._marketStatusViewModel = new Js(e, this._size);
                            const t = (0, J.combine)((() => this._marketStatusCanBeShown.value() && (0, l.ensureNotNull)(this._marketStatusViewModel).visible().value() && !(0, Pt.isEconomicSymbol)(this._source.symbolInfo().value())), this._marketStatusCanBeShown, this._marketStatusViewModel.visible(), this._source.symbolInfo());
                            this._visibilitySpawns.push(t), this._tooltipSpawns.push(this._marketStatusViewModel.tooltip().spawn());
                            const i = {
                                visible: t,
                                model: this._marketStatusViewModel
                            };
                            null !== e && (this._sessionWidget = new Oe(this._source), i.additionalWidgets = [this._sessionWidget]), this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
                        } else this._marketStatusViewModel.setModel(e), null === (t = this._sessionWidget) || void 0 === t || t.updateSource(this._source)
                    }
                    if (this._options.dataUpdateModeEnabled) {
                        const t = this._source.dataUpdatedModeModel();
                        if (null === this._dataUpdatedModeViewModel) {
                            const s = {
                                ...this._options.dataUpdateMode,
                                shouldBeHiddenRegardlessOfStatus: null === (i = null === (e = this._source.marketStatusModel()) || void 0 === e ? void 0 : e.futuresContractExpirationTime()) || void 0 === i ? void 0 : i.expired()
                            };
                            this._dataUpdatedModeViewModel = new Pi(t, this._size, s);
                            const o = (0, J.combine)((() => this._dataUpdatedModeCanBeShown.value() && (0, l.ensureNotNull)(this._dataUpdatedModeViewModel).visible().value() && !(0,
                                Pt.isEconomicSymbol)(this._source.symbolInfo().value())), this._dataUpdatedModeCanBeShown, this._dataUpdatedModeViewModel.visible(), this._source.symbolInfo());
                            this._visibilitySpawns.push(o), this._tooltipSpawns.push(this._dataUpdatedModeViewModel.tooltip().spawn());
                            const n = {
                                visible: o,
                                model: this._dataUpdatedModeViewModel
                            };
                            this._statusWidgetInfos.push(n), this._renderer.addStatusModel(n)
                        } else this._dataUpdatedModeViewModel.setModel(t)
                    }
                    if (this._options.dataProblemEnabled) {
                        const t = this._source.dataProblemModel();
                        if (null === this._dataProblemViewModel) {
                            this._dataProblemViewModel = new Qi(t, this._size), this._isDataProblemCritical = this._dataProblemViewModel.isDataProblemCritical().spawn();
                            const e = (0, J.combine)((() => this._dataProblemCanBeShown.value() && (0, l.ensureNotNull)(this._dataProblemViewModel).visible().value()), this._dataProblemCanBeShown, this._dataProblemViewModel.visible());
                            this._visibilitySpawns.push(e), this._tooltipSpawns.push(this._dataProblemViewModel.tooltip().spawn());
                            const i = {
                                visible: e,
                                model: this._dataProblemViewModel
                            };
                            this._statusWidgetInfos.push(i), this._renderer.addStatusModel(i)
                        } else this._dataProblemViewModel.setModel(t)
                    }
                    if (null !== (n = null === (o = (s = this._source).isMainSeries) || void 0 === o ? void 0 : o.call(s)) && void 0 !== n && n) {
                        const t = _s.CustomStatusModel.getInstance(),
                            e = null !== (r = null === (a = this._symbol) || void 0 === a ? void 0 : a.value()) && void 0 !== r ? r : null;
                        if (null === this._customStatusViewModel) {
                            this._customStatusViewModel = new cs(t, this._size), this._customStatusViewModel.setSymbol(e);
                            const i = this._customStatusViewModel.visible().spawn(),
                                s = {
                                    visible: i,
                                    model: this._customStatusViewModel
                                };
                            this._visibilitySpawns.push(i), this._tooltipSpawns.push(this._customStatusViewModel.tooltip().spawn()), this._statusWidgetInfos.push(s), this._renderer.addStatusModel(s)
                        } else this._customStatusViewModel.setModel(t), this._customStatusViewModel.setSymbol(e)
                    }
                }
                _addSubscriptionForSymbolInvalid() {
                    const t = this._source.isSymbolInvalid();
                    this._options.sourceStatusesEnabled && null !== t && (t.subscribe(this._updateStatusWidgetsVisibilities.bind(this)), t.subscribe(this._updateErrorWidgetIsShown.bind(this), {
                        callWithLast: !0
                    }))
                }
                _updateErrorWidgetIsShown() {
                    var t, e, i, s;
                    const l = null !== (e = null === (t = this._source.isSymbolInvalid()) || void 0 === t ? void 0 : t.value()) && void 0 !== e && e,
                        o = null !== (s = null === (i = this._dataSourceHasErrorVisible) || void 0 === i ? void 0 : i.value()) && void 0 !== s && s;
                    this.errorWidgetIsShown.setValue(l || o)
                }
                _handleToggleDropdown(t) {
                    var e, i;
                    this._menuPosition = t, this._menuOpened = !this._menuOpened, this._menuOpened && (null === (e = this._source.symbol()) || void 0 === e || e.subscribe(this._handleDropdownMenuClose), i = `Open full tooltip for statuses: ${this._tooltips.value().join(", ")}`, (0, V.trackEvent)("GUI", "Statuses widget's action", i)), this._updateDropdownMenu()
                }
                _updateDropdownMenu() {
                    Promise.all([i.e(3842), i.e(5649), i.e(2731), i.e(962), i.e(3179), i.e(8643)]).then(i.bind(i, 52685)).then((t => {
                        t.render({
                            opened: this._menuOpened,
                            container: this._container,
                            rendererButton: this._renderer.element,
                            statusWidgetInfos: this._statusWidgetInfos,
                            onClose: this._handleDropdownMenuClose,
                            position: (0,
                                l.ensureNotNull)(this._menuPosition)
                        })
                    }))
                }
            }
            var qs = i(49475),
                Ks = i(18341);
            class tl {
                constructor(t, e) {
                    this._symbol = null, this._isSymbolInvalid = null, this._symbolInfo = new(n())(null).spawn(), this._source = t, t.properties().hasChild("symbol") && (this._symbol = (0, U.createWVFromGetterAndSubscription)((() => t.properties().symbol.value()), t.properties().symbol.listeners()));
                    const i = [];
                    if ((0, Ks.isStudyLineTool)(t)) i.push(t.onStatusChanged());
                    else if ((0, pt.isStudy)(t) || (0, pt.isStudyStub)(t)) this._isSymbolInvalid = (0, qs.createWVFromGetterAndSubscriptions)((() => t.isSymbolInvalid() && t.isActualInterval()), i), i.push(t.onStatusChanged(), t.onIsActualIntervalChange());
                    else {
                        (0, l.assert)(t === e.mainSeries());
                        const s = e.mainSeries();
                        this._isSymbolInvalid = (0, U.createWVFromGetterAndSubscription)((() => s.isSymbolInvalid()), s.onStatusChanged()), i.push(s.onStatusChanged()), this._symbolInfo = (0, U.createWVFromGetterAndSubscription)(s.symbolInfo.bind(s), s.dataEvents().symbolResolved())
                    }
                    this._dataSourceErrorStatus = (0, qs.createWVFromGetterAndSubscriptions)((() => this._source.statusProvider({}).errorStatus()), i)
                }
                destroy() {
                    var t, e;
                    null === (t = this._symbol) || void 0 === t || t.destroy(), null === (e = this._isSymbolInvalid) || void 0 === e || e.destroy(), this._dataSourceErrorStatus.destroy(), this._symbolInfo.destroy()
                }
                symbol() {
                    return this._symbol
                }
                isSymbolInvalid() {
                    return this._isSymbolInvalid
                }
                errorStatus() {
                    return this._dataSourceErrorStatus
                }
                symbolInfo() {
                    return this._symbolInfo
                }
                marketStatusModel() {
                    return this._source.marketStatusModel()
                }
                dataProblemModel() {
                    return this._source.dataProblemModel()
                }
                dataUpdatedModeModel() {
                    return this._source.dataUpdatedModeModel()
                }
                isMainSeries() {
                    var t, e, i;
                    return null !== (i = null === (e = (t = this._source).isMainSeries) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i && i
                }
            }
            class el extends Qs {
                constructor(t, e, i) {
                    super(new tl(t, e), i), this._isInReplay = new(n())(!1).readonly().spawn(), this._isInReplayCanBeShown = null, this._inited = !1
                }
                destroy() {
                    super.destroy()
                }
                _updateStatusWidgetsVisibilities() {
                    super._updateStatusWidgetsVisibilities()
                }
                _isPrimaryWidgetShown() {
                    var t, e;
                    return super._isPrimaryWidgetShown() || null !== (e = null === (t = this._isInReplay) || void 0 === t ? void 0 : t.value()) && void 0 !== e && e
                }
            }
            var il = i(5286),
                sl = i(43370);
            const ll = {
                    readOnlyMode: !1,
                    contextMenu: {
                        settings: !0,
                        mainSeries: !0,
                        studies: !0,
                        showOpenMarketStatus: !1
                    },
                    symbolMarkerEnabled: !1,
                    showToggleButton: !0,
                    canShowSourceCode: !1,
                    statusesWidgets: {
                        sourceStatusesEnabled: !1,
                        sourceStatuses: {
                            errorSolution: !0
                        },
                        marketStatusEnabled: !1,
                        marketStatus: {
                            preMarketSolution: !0,
                            postMarketSolution: !0
                        },
                        dataUpdateModeEnabled: !1,
                        dataUpdateMode: {
                            subscriptionFullInfo: !0
                        },
                        dataProblemEnabled: !1
                    }
                },
                ol = (d.enabled("hide_legend_by_default"), d.enabled("fundamental_widget")),
                nl = d.enabled("legend_context_menu"),
                al = 2 * parseInt(S.marginlegendhoriz);
            class rl {
                constructor(t, e, i, s, l, o, r, d) {
                    this._mainSeriesViewModel = null, this._dataSourceViewModels = [], this._visibleDataSourceCount = new(n())(0), this._themedColor = new(n())(""), this._mainSeriesRowHidden = null, this._dataSourceRowsHidden = [], this._customWidgetsVisibilities = [], this._allLegendHidden = new(n())(!1),
                        this._studiesLegendHidden = new(n())(!1), this._customWidgetsHeights = [], this._onLegendVisibilityToggled = null, this._availableHeight = 0, this._collapsedDataSourcesCount = new(n())(0), this._collapsedDataSourcesTitle = new(n())(""), this._mainSeriesStatusWidget = null, this._dataSourcesStatusesWidgets = [], this._size = null, this._customLegendWidgetsFactoriesMap = new Map, this._customLegendWidgetsMap = new Map, this._margin = 0, this._model = t, this._paneWidget = e, this._options = (0, a.merge)((0, a.clone)(ll), r), this._callbacks = d, this._mainSeriesViewModelsOptions = {
                            readOnlyMode: this._options.readOnlyMode,
                            symbolMarkerEnabled: this._options.symbolMarkerEnabled
                        }, this._dataSourceViewModelsOptions = {
                            ...this._mainSeriesViewModelsOptions,
                            canShowSourceCode: this._options.canShowSourceCode
                        }, this._backgroundThemeName = i;
                    const u = this._showLegendCalculatedProperty();
                    this._isDataSourcesCollapsed = new(n())(u.value()), u.subscribe(this, (() => {
                        this._isDataSourcesCollapsed.setValue(u.value())
                    }));
                    const h = new(n())(this._getCustomTextColorValue()),
                        c = this._model.model().properties().childs();
                    c.scalesProperties.childs().textColor.subscribe(this, (() => {
                        h.setValue(this._getCustomTextColorValue())
                    }));
                    const _ = c.paneProperties.childs().legendProperties.childs().showBackground,
                        p = new(n())(_.value());
                    _.subscribe(this, (() => {
                        p.setValue(_.value())
                    }));
                    const m = c.paneProperties.childs().legendProperties.childs().backgroundTransparency,
                        g = new(n())(m.value());
                    m.subscribe(this, (() => {
                        g.setValue(m.value())
                    })), this._hideNotMainSources = s, this._hideNotMainSources.subscribe(this._updateLegendVisibilities.bind(this)), this._hideAllExceptFirstLine = l, this._hideAllExceptFirstLine.subscribe(this._updateCollapsedSourcesMode.bind(this)), this._hideWholeLegend = o, this._hideWholeLegend.subscribe(this._updateLegendVisibilities.bind(this)), this._isPaneMain = new(n())(this._getIsPaneMainValue()), this._updateCollapsedSourcesModeThrottle = (0, sl.default)(this._updateCollapsedSourcesMode.bind(this), 100), this._renderer = new R({
                        withActions: !this._options.readOnlyMode,
                        showToggleButton: this._options.showToggleButton,
                        isStudiesLegendHidden: this._studiesLegendHidden.readonly(),
                        isAllLegendHidden: this._allLegendHidden.readonly(),
                        customTextColor: h.readonly(),
                        themedColor: this._themedColor.readonly(),
                        showBackground: p.readonly(),
                        backgroundTransparency: g.readonly(),
                        collapsedDataSourcesCount: this._collapsedDataSourcesCount.readonly(),
                        collapsedDataSourcesTitle: this._collapsedDataSourcesTitle.readonly(),
                        showLegendWidgetContextMenu: this.onShowLegendWidgetContextMenu.bind(this),
                        hideAllExceptFirstLine: this._hideAllExceptFirstLine
                    }, {
                        visibleDataSourceCount: this._visibleDataSourceCount.readonly(),
                        isDataSourcesCollapsed: this._isDataSourcesCollapsed.readonly(),
                        showObjectsTree: this._isPaneMain.readonly(),
                        onCollapseDataSources: this.onCollapseDataSources.bind(this),
                        onShowObjectsTreeDialog: this._callbacks.showObjectsTreeDialog
                    })
                }
                destroy() {
                    this._backgroundThemeName.destroy(), this._hideNotMainSources.destroy(), this._hideAllExceptFirstLine.destroy(), this._hideWholeLegend.destroy(), null !== this._mainSeriesViewModel && this._destroyMainDataSource();
                    for (const t of this._dataSourceViewModels) t.destroy();
                    for (const t of this._dataSourcesStatusesWidgets) t.destroy();
                    this._clearSubscriptions();
                    for (const t of Array.from(this._customLegendWidgetsMap.keys())) this._destroyCustomWidgetFromLayerBlock(t);
                    this._customLegendWidgetsMap.clear(), this._renderer.destroy(), delete this._renderer, this._showLegendCalculatedProperty().unsubscribeAll(this), this._showLegendOriginalProperty().unsubscribeAll(this);
                    const t = this._model.model().properties().childs();
                    t.scalesProperties.childs().textColor.unsubscribeAll(this), t.paneProperties.childs().legendProperties.childs().showBackground.unsubscribeAll(this), t.paneProperties.childs().legendProperties.childs().backgroundTransparency.unsubscribeAll(this)
                }
                addCustomWidgetToLegend(t, e) {
                    const i = this._customLegendWidgetsFactoriesMap.get(e.block) || new Map,
                        s = i.get(e.position) || [];
                    s.push(t), i.set(e.position, s), this._customLegendWidgetsFactoriesMap.set(e.block, i), this.updateLayout(), this._updateCustomWidgetModeBySize()
                }
                onShowLegendWidgetContextMenu(t, e) {
                    if (this._options.readOnlyMode || !nl) return Promise.resolve();
                    A("Show legend context menu");
                    const i = new Map;
                    for (const t of Array.from(this._customLegendWidgetsMap.keys())) {
                        const e = (0, l.ensureDefined)(this._customLegendWidgetsMap.get(t)),
                            s = new Map;
                        for (const t of Array.from(e.keys())) {
                            const i = (0, l.ensureDefined)(e.get(t)),
                                o = s.get(t) || [];
                            for (const t of i) o.push(...t.contextMenuActions());
                            s.set(t, o)
                        }
                        i.set(t, s)
                    }
                    return function (t, e, i, s, l, o) {
                        const n = [],
                            a = s.get(0);
                        if (void 0 !== a) {
                            const t = a.get(1);
                            void 0 !== t && t.length > 0 && (n.push(...t), n.push(new Dt.Separator))
                        }
                        const r = t.model().properties().childs().paneProperties.childs().legendProperties.childs(),
                            d = ae && t.model().symbolSources().some((t => {
                                var e;
                                return void 0 !== (null === (e = t.symbolInfo()) || void 0 === e ? void 0 : e.price_source_id)
                            }));
                        if (n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleSymbolVisibility",
                                checkable: !0,
                                checked: r.showSeriesTitle.value(),
                                label: Qt,
                                statName: "Show Symbol",
                                onExecute: () => Ft(t, r.showSeriesTitle, Rt)
                            })), e.showOpenMarketStatus && "market" === t.mainSeries().marketStatusModel().status().value() && !(0, Pt.isEconomicSymbol)(t.mainSeries().symbolInfo()) && n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleOpenMarketStatusVisibility",
                                checkable: !0,
                                checked: zt.showMarketOpenStatusProperty.value(),
                                label: qt,
                                statName: "Show Open market status",
                                onExecute: () => Ft(t, zt.showMarketOpenStatusProperty, Gt)
                            })), n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleOhlcValuesVisibility",
                                checkable: !0,
                                checked: r.showSeriesOHLC.value(),
                                label: Kt,
                                statName: "Show OHLC Values",
                                onExecute: () => Ft(t, r.showSeriesOHLC, Ut)
                            })), n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleBarChangeValuesVisibility",
                                checkable: !0,
                                checked: r.showBarChange.value(),
                                label: te,
                                statName: "Show Bar Change Values",
                                onExecute: () => Ft(t, r.showBarChange, jt)
                            })), n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleVolumeVisibility",
                                checkable: !0,
                                checked: r.showVolume.value(),
                                label: ee,
                                statName: "Show Volume",
                                onExecute: () => Ft(t, r.showVolume, Xt)
                            })), d && n.push(new Dt.Action({
                                actionId: "Chart.Legend.TogglePriceSourceVisibility",
                                checkable: !0,
                                checked: r.showPriceSource.value(),
                                label: oe,
                                statName: "Show Price Source",
                                onExecute: () => Ft(t, r.showPriceSource, Jt)
                            })), n.push(new Dt.Separator), void 0 !== a) {
                            const t = a.get(0);
                            void 0 !== t && t.length > 0 && (n.push(...t), n.push(new Dt.Separator))
                        }
                        const u = s.get(1);
                        if (void 0 !== u) {
                            const t = u.get(1);
                            void 0 !== t && t.length > 0 && (n.push(...t), n.push(new Dt.Separator))
                        }
                        if (t.model().priceDataSources().some((t => !(0, Nt.isActingAsSymbolSource)(t) && t.showInObjectTree())) && (n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleIndicatorTitlesVisibility",
                                checkable: !0,
                                checked: r.showStudyTitles.value(),
                                label: ie,
                                statName: "Show Indicator Titles",
                                onExecute: () => Ft(t, r.showStudyTitles, $t)
                            })), n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleIndicatorArgumentsVisibility",
                                checkable: !0,
                                checked: r.showStudyArguments.value(),
                                label: se,
                                statName: "Show Indicator Arguments",
                                onExecute: () => Ft(t, r.showStudyArguments, Yt)
                            })), n.push(new Dt.Action({
                                actionId: "Chart.Legend.ToggleIndicatorValuesVisibility",
                                checkable: !0,
                                checked: r.showStudyValues.value(),
                                label: le,
                                statName: "Show Indicator Values",
                                onExecute: () => Ft(t, r.showStudyValues, Zt)
                            }))), void 0 !== u) {
                            const t = u.get(0);
                            void 0 !== t && t.length > 0 && (n.push(...t), n.push(new Dt.Separator))
                        }
                        return e.settings && (n[n.length - 1] instanceof Dt.Separator || n.push(new Dt.Separator), n.push(new Dt.Action({
                            actionId: "Chart.Dialogs.ShowGeneralSettings.LegendTab",
                            label: ne,
                            icon: Ot,
                            statName: "Settings...",
                            onExecute: () => i(st.TabNames.legend)
                        }))), Bt.ContextMenuManager.showMenu(n, l, void 0, {
                            menuName: "LegendPropertiesContextMenu"
                        }, o)
                    }(this._model, this._options.contextMenu, this._callbacks.showGeneralChartProperties, i, t, e)
                }
                onCollapseDataSources() {
                    const t = this._showLegendOriginalProperty();
                    t.setValue(!t.value())
                }
                updateLayout() {
                    const t = this._paneWidget.state().sourcesByGroup().legendViewSources().filter((t => null !== t.statusView() && t.isDisplayedInLegend()));
                    if (0 === t.length) return;
                    const e = this._model.mainSeries(),
                        i = t.indexOf(e);
                    i > -1 ? (t.splice(i, 1), ol || null !== this._mainSeriesViewModel || (this._mainSeriesViewModel = new _t(this._model, e, this._mainSeriesViewModelsOptions, this._callbacks, this._options.contextMenu), this._mainSeriesStatusWidget = new el(e, this._model.model(), this._options.statusesWidgets), this._renderer.addMainDataSource(this._mainSeriesViewModel, this._mainSeriesStatusWidget)), this._addCustomWidgetForLayerBlock(0)) : null !== this._mainSeriesViewModel && (this._destroyMainDataSource(), this._destroyCustomWidgetFromLayerBlock(0));
                    const s = [],
                        o = [],
                        n = this._dataSourceViewModels.length;
                    if (0 === n)
                        for (let e = t.length - 1; e >= 0; e--) {
                            const i = t[e];
                            s.push(new Wt(this._model, i, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)), o.push(new Qs(new tl(i, this._model.model()), this._options.statusesWidgets))
                        } else {
                            let e = 0;
                            for (let i = t.length - 1; i >= 0; i--) {
                                const l = t[i];
                                this._dataSourceViewModels[e] ? (this._dataSourceViewModels[e].updateSource(l), this._dataSourcesStatusesWidgets[e].updateSource(new tl(l, this._model.model()))) : (s.push(new Wt(this._model, l, this._dataSourceViewModelsOptions, this._callbacks, this._options.contextMenu)),
                                    o.push(new Qs(new tl(t[i], this._model.model()), this._options.statusesWidgets))), e++
                            }
                            for (; this._dataSourceViewModels.length > e;)(0, l.ensureDefined)(this._dataSourceViewModels.pop()).destroy();
                            for (; this._dataSourcesStatusesWidgets.length > e;)(0, l.ensureDefined)(this._dataSourcesStatusesWidgets.pop()).destroy()
                        }
                    0 !== s.length && (this._renderer.addDataSources(s, o), this._dataSourceViewModels.push(...s), this._dataSourcesStatusesWidgets.push(...o)), n !== this._dataSourceViewModels.length && this._updateCollapsedSourcesMode(), this._dataSourceViewModels.length > 0 ? this._addCustomWidgetForLayerBlock(1) : this._destroyCustomWidgetFromLayerBlock(1), this._recreateSubscriptions(), this._isPaneMain.setValue(this._getIsPaneMainValue()), this.update(), this._updateWidgetModeByWidth()
                }
                update() {
                    null !== this._mainSeriesViewModel && this._mainSeriesViewModel.update();
                    for (const t of this._dataSourceViewModels) t.update()
                }
                updateThemedColors(t) {
                    null === t && (t = (0, il.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(t || "")
                }
                firstTitle() {
                    return this._renderer.firstTitle()
                }
                getElement() {
                    return this._renderer.getElement()
                }
                addMargin(t) {
                    if (this._margin === t) return;
                    this._margin = t;
                    this._renderer.getElement().style.maxWidth = 0 === this._margin ? "" : `calc(100% - ${this._margin+al}px)`, this._updateWidgetModeBySize()
                }
                updateWidgetModeBySize(t) {
                    this._size = t, this._updateWidgetModeBySize()
                }
                _updateWidgetModeBySize() {
                    this._updateWidgetModeByWidth(), this._updateWidgetModeByHeight(), this._updateCustomWidgetModeBySize()
                }
                _updateWidgetModeByWidth() {
                    if (null === this._size) return;
                    const t = this._availableWidth();
                    this._renderer.updateMode(t), this._paneWidget.hasState() && this._paneWidget.state().containsMainSeries() && this._model.mainSeries().setTextSourceIsAlwaysTickerRestrictionEnabled(t <= 132)
                }
                _updateWidgetModeByHeight() {
                    null !== this._size && (this._availableHeight = .8 * this._size.height, this._updateCollapsedSourcesModeThrottle())
                }
                _updateCustomWidgetModeBySize() {
                    if (null === this._size) return;
                    const t = (0, s.size)({
                        width: this._availableWidth(),
                        height: this._size.height
                    });
                    for (const e of Array.from(this._customLegendWidgetsMap.values()))
                        for (const i of Array.from(e.values()))
                            for (const e of i) e.updateWidgetModeBySize(t)
                }
                _destroyMainDataSource() {
                    (0, l.ensureNotNull)(this._mainSeriesStatusWidget).destroy(), this._mainSeriesStatusWidget = null, (0, l.ensureNotNull)(this._mainSeriesViewModel).destroy(), this._mainSeriesViewModel = null
                }
                _updateCollapsedSourcesMode() {
                    const t = this._dataSourceViewModels.length,
                        e = this._hideAllExceptFirstLine.value();
                    if (this._availableHeight > 0 && t > 2) {
                        const i = Number(this._renderer.getMainSourceHeight()),
                            s = this._renderer.getDataSourceHeight(),
                            l = this._getCustomWidgetsHeight();
                        if (null !== s) {
                            const o = Math.floor((this._availableHeight - i - l) / s),
                                n = Math.max(o, 2) - 1;
                            if (t > n + 1) {
                                let i = "";
                                for (let s = 0; s < t; s++) {
                                    const t = s < n;
                                    this._dataSourceViewModels[s].setGlobalVisibility(t && (!e || 0 === s)), t || (i += `${0===i.length?"":", "}${this._dataSourceViewModels[s].getFullTitle()}`)
                                }
                                return this._collapsedDataSourcesTitle.setValue(i),
                                    void this._collapsedDataSourcesCount.setValue(t - n)
                            }
                        }
                    }
                    for (let t = 0; t < this._dataSourceViewModels.length; ++t) this._dataSourceViewModels[t].setGlobalVisibility(!e || 0 === t);
                    this._collapsedDataSourcesCount.setValue(0), this._collapsedDataSourcesTitle.setValue("")
                }
                _getCustomWidgetsHeight() {
                    let t = 0;
                    for (const e of Array.from(this._customLegendWidgetsMap.values()))
                        for (const i of Array.from(e.values()))
                            for (const e of i) t += e.height().value();
                    return t
                }
                _getCustomTextColorValue() {
                    const t = this._model.model().properties().childs().scalesProperties.childs().textColor.value();
                    return (0, il.isStdThemedDefaultValue)("chartProperties.scalesProperties.textColor", t, (0, il.getCurrentTheme)().name) ? null : t
                }
                _clearSubscriptions() {
                    null !== this._mainSeriesRowHidden && (this._mainSeriesRowHidden.destroy(), this._mainSeriesRowHidden = null);
                    for (const t of this._dataSourceRowsHidden) t.destroy();
                    this._dataSourceRowsHidden = [];
                    for (const t of this._customWidgetsVisibilities) t.destroy();
                    this._customWidgetsVisibilities = [];
                    for (const t of this._customWidgetsHeights) t.destroy();
                    this._customWidgetsHeights = []
                }
                _recreateSubscriptions() {
                    this._clearSubscriptions(), null !== this._mainSeriesViewModel && (this._mainSeriesRowHidden = this._mainSeriesViewModel.isRowHidden().spawn(), this._mainSeriesRowHidden.subscribe(this._updateLegendVisibilities.bind(this)));
                    for (const t of this._dataSourceViewModels) {
                        const e = t.isRowHidden().spawn();
                        this._dataSourceRowsHidden.push(e), e.subscribe(this._updateVisibleDataSourceCount.bind(this)), e.subscribe(this._updateLegendVisibilities.bind(this))
                    }
                    for (const t of Array.from(this._customLegendWidgetsMap.values()))
                        for (const e of Array.from(t.values()))
                            for (const t of e) {
                                const e = t.visibility().spawn();
                                this._customWidgetsVisibilities.push(e), e.subscribe(this._updateLegendVisibilities.bind(this));
                                const i = t.height().spawn();
                                this._customWidgetsHeights.push(i), i.subscribe(this._updateCollapsedSourcesMode.bind(this))
                            }
                    this._updateVisibleDataSourceCount(), this._updateLegendVisibilities()
                }
                _updateLegendVisibilities() {
                    if (this._hideWholeLegend.value()) return void this._allLegendHidden.setValue(!0);
                    const t = this._dataSourceRowsHidden.every((t => t.value())),
                        e = this._hideNotMainSources.value() || t;
                    this._studiesLegendHidden.setValue(e);
                    const i = null === this._mainSeriesRowHidden || this._mainSeriesRowHidden.value(),
                        s = this._customWidgetsVisibilities.some((t => t.value()));
                    this._allLegendHidden.setValue(t && i && !s)
                }
                _updateVisibleDataSourceCount() {
                    const t = this._dataSourceRowsHidden.filter((t => !t.value())).length;
                    this._visibleDataSourceCount.setValue(t)
                }
                _setLegendVisibilityToggled() {
                    0
                }
                _getIsPaneMainValue() {
                    return this._paneWidget.containsMainSeries()
                }
                _showLegendCalculatedProperty() {
                    return this._model.model().showLegend()
                }
                _showLegendOriginalProperty() {
                    return this._model.model().properties().childs().paneProperties.childs().legendProperties.childs().showLegend
                }
                _addCustomWidgetForLayerBlock(t) {
                    const e = this._customLegendWidgetsFactoriesMap.get(t);
                    if (void 0 === e) return;
                    const i = this._customLegendWidgetsMap.get(t) || new Map;
                    let s = !1;
                    for (const l of Array.from(e.keys())) {
                        const o = i.get(l) || [],
                            n = e.get(l) || [];
                        for (let e = o.length; e < n.length; e++) {
                            const i = n[e](this._model.model(), this._backgroundThemeName);
                            0 === t && 0 === l && i.setGlobalVisibility((0, J.combine)(((t, e) => !t && !e), this._hideNotMainSources, this._hideAllExceptFirstLine)), o.push(i), this._renderer.addCustomWidget(i, {
                                block: t,
                                position: l
                            }), s = !0
                        }
                        s && i.set(l, o)
                    }
                    s && this._customLegendWidgetsMap.set(t, i)
                }
                _destroyCustomWidgetFromLayerBlock(t) {
                    const e = this._customLegendWidgetsMap.get(t);
                    if (void 0 !== e) {
                        for (const t of Array.from(e.values()))
                            for (const e of t) e.destroy();
                        e.clear(), this._customLegendWidgetsMap.delete(t)
                    }
                }
                _availableWidth() {
                    return null === this._size ? 0 : this._size.width - this._margin - al
                }
            }
        },
        69289: (t, e, i) => {
            "use strict";
            i.r(e), i.d(e, {
                PaneControlsWidget: () => Q
            });
            var s = i(32563),
                l = i(51768),
                o = i(44352),
                n = i(68335),
                a = i(3228),
                r = i(28853),
                d = i(50151),
                u = i(24377),
                h = i(65616),
                c = i(34926),
                _ = i(94815),
                p = i(7488);
            class m {
                constructor(t, e, i) {
                    this._parentEl = document.createElement("div"), this._listActionsWrapperEl = null, this._listActionsElements = {}, this._actionsSpawns = {}, this._onMouseEnterLeaveEventHandler = null, this._mouseOverWidget = !1, this._width = null, this._wrapEl = t, this._onMouseEnterLeaveEventHandler = this._onMouseEnterLeaveEvent.bind(this), this._wrapEl.addEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.addEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._actions = e, this._globalVisibility = i.globalVisibility.spawn(), this._globalVisibility.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._visibilityType = i.visibilityType.spawn(), this._visibilityType.subscribe(this._updatePaneControlsWidgetVisibility.bind(this)), this._doNotSwitchToContextMenuMode = i.doNotSwitchToContextMenuMode, this._forceContextMenuMode = i.forceContextMenuMode.spawn(), this._forceContextMenuMode.subscribe(this._updateWidgetMode.bind(this)), this._themedColor = i.themedColor.spawn(), this._themedColor.subscribe(this._updateThemedColor.bind(this));
                    for (const [t, e] of Object.entries(this._actions)) {
                        const i = t;
                        this._actionsSpawns[i] = {
                            visible: e.visible.spawn(),
                            title: void 0 === e.title ? null : e.title.spawn()
                        }, this._actionsSpawns[i].visible.subscribe(this._updateActionVisibilities.bind(this, i));
                        const s = this._actionsSpawns[i].title;
                        null !== s && s.subscribe(this._updateActionTitle.bind(this, i))
                    }
                    this._render(), this._updatePaneControlsWidgetVisibility(), this._updateThemedColor(this._themedColor.value()), this._parentEl.classList.toggle(_.touchMode, h.trackingModeIsAvailable), this._parentEl.addEventListener("contextmenu", (t => t.preventDefault()))
                }
                destroy() {
                    this._visibilityType.destroy(), this._forceContextMenuMode.destroy(), this._themedColor.destroy();
                    for (const t of Object.keys(this._actionsSpawns)) {
                        const e = t;
                        this._actionsSpawns[e].visible.destroy();
                        const i = this._actionsSpawns[e].title;
                        null !== i && i.destroy()
                    }
                    null !== this._onMouseEnterLeaveEventHandler && (this._wrapEl.removeEventListener("mouseenter", this._onMouseEnterLeaveEventHandler), this._wrapEl.removeEventListener("mouseleave", this._onMouseEnterLeaveEventHandler), this._onMouseEnterLeaveEventHandler = null),
                        this._parentEl.innerHTML = "", delete this._parentEl
                }
                getElement() {
                    return this._parentEl
                }
                bottomWithMargin() {
                    const t = this._parentEl.classList.contains(_.touchMode) ? Number(_.css_value_pane_controls_button_touch_size) : Number(_.css_value_pane_controls_button_size);
                    return 2 * Number(_.css_value_pane_controls_margin_top) + t
                }
                updateWidgetModeByWidth(t) {
                    this._width = t, this._updateWidgetMode()
                }
                _updateWidgetMode() {
                    if (null === this._width) return;
                    const t = !this._doNotSwitchToContextMenuMode.value() && this._width < 356,
                        e = !this._doNotSwitchToContextMenuMode.value() && (this._forceContextMenuMode.value() || this._width < 666.65),
                        i = (0, d.ensureNotNull)(this._listActionsWrapperEl),
                        s = (0, d.ensureNotNull)(this._listActionsElements.more);
                    i.classList.toggle(p.blockHidden, t || e), s.classList.toggle(p.blockHidden, t || !e || !this._actions.more.visible.value())
                }
                _render() {
                    this._renderActions(), this._parentEl.classList.add(_.paneControls), this._wrapEl.append(this._parentEl)
                }
                _renderActions() {
                    null === this._listActionsWrapperEl && (this._listActionsWrapperEl = document.createElement("div"), this._listActionsWrapperEl.classList.add(_.buttonsWrapper), this._parentEl.append(this._listActionsWrapperEl));
                    const t = h.trackingModeIsAvailable ? "large" : "small";
                    this._listActionsElements.up = (0, c.createActionElement)(this._actions.up, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.down = (0, c.createActionElement)(this._actions.down, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.collapse = (0, c.createActionElement)(this._actions.collapse, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.restore = (0, c.createActionElement)(this._actions.restore, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.close = (0, c.createActionElement)(this._actions.close, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.maximize = (0, c.createActionElement)(this._actions.maximize, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsElements.minimize = (0, c.createActionElement)(this._actions.minimize, _.button, _.buttonIcon, p.blockHidden, t), this._listActionsWrapperEl.append(this._listActionsElements.up, this._listActionsElements.down, this._listActionsElements.close, this._listActionsElements.collapse, this._listActionsElements.restore, this._listActionsElements.maximize, this._listActionsElements.minimize), this._listActionsElements.more = (0, c.createActionElement)(this._actions.more, _.button, _.buttonIcon, p.blockHidden, t);
                    for (const t of Object.keys(this._listActionsElements))(0, d.ensureNotNull)(this._listActionsElements[t]).classList.add(_.newButton);
                    this._parentEl.append(this._listActionsElements.more)
                }
                _updateActionVisibilities(t, e) {
                    (0, d.ensureNotNull)(this._listActionsElements[t]).classList.toggle(p.blockHidden, !e)
                }
                _updateActionTitle(t, e) {
                    (0, d.ensureNotNull)(this._listActionsElements[t]).setAttribute("title", e)
                }
                _onMouseEnterLeaveEvent(t) {
                    this._mouseOverWidget = "mouseenter" === t.type, "visibleOnMouseOver" === this._visibilityType.value() && this._updatePaneControlsWidgetVisibility()
                }
                _updatePaneControlsWidgetVisibility() {
                    let t, e = !1;
                    switch (this._visibilityType.value()) {
                        case "alwaysOff":
                            t = !1, e = !0;
                            break;
                        case "alwaysOn":
                            t = this._globalVisibility.value();
                            break;
                        case "visibleOnMouseOver":
                            t = this._globalVisibility.value() && this._mouseOverWidget
                    }
                    this._parentEl.classList.toggle(_.hidden, !t), this._parentEl.classList.toggle(_.forceHidden, !this._globalVisibility.value() || e)
                }
                _updateThemedColor(t) {
                    if (t.length > 0) {
                        const [e, i, s] = (0, u.parseRgb)(t);
                        this._parentEl.style.color = (0, u.rgbaToString)([e, i, s, (0, u.normalizeAlphaComponent)(.8)])
                    } else this._parentEl.style.removeProperty("color")
                }
            }
            var g = i(39347),
                v = i(10643),
                b = i(36016),
                w = i(72899),
                S = i(48344),
                y = i(99539),
                M = i(20465),
                C = i(34763);
            const E = o.t(null, void 0, i(68854)),
                f = E,
                k = (0, n.humanReadableModifiers)(n.Modifiers.Mod) + E;
            var V = i(58275),
                A = i.n(V),
                T = i(5286),
                x = i(61814),
                L = i(72237),
                H = i(81020),
                W = i(3515),
                D = i(79526),
                B = i(82847),
                P = i(7859),
                z = i(70471),
                I = i(71402),
                N = i(42930);
            const O = s.mobiletouch,
                F = o.t(null, void 0, i(83498)),
                R = o.t(null, void 0, i(70343)),
                G = o.t(null, void 0, i(39899)),
                U = o.t(null, void 0, i(19603)),
                j = o.t(null, void 0, i(91029)),
                $ = o.t(null, void 0, i(39589)),
                Y = o.t(null, void 0, i(35732)),
                Z = o.t(null, void 0, i(68854)),
                X = (0, x.hotKeySerialize)({
                    keys: [""],
                    text: Z
                }),
                J = (0, x.hotKeySerialize)({
                    keys: [(0, n.humanReadableModifiers)(n.Modifiers.Mod, !1)],
                    text: `{0} + ${Z}`
                });
            class Q {
                constructor(t, e, i, s, l) {
                    this._actions = {}, this._moreCMShown = !1, this._themedColor = new(A())(""), this._connectedToBroker = new(A())(!1), this._isDestroyed = !1, this._model = t, this._paneWidget = e, this._callbacks = s, this._closeButtonVisibility = new(A())(this._getCloseButtonVisibility()), this._upButtonVisibility = new(A())(this._getUpButtonVisibility()), this._downButtonVisibility = new(A())(this._getDownButtonVisibility()), this._maximizeButtonVisibility = new(A())(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility = new(A())(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility = new(A())(this._getCollapseButtonVisibility()), this._restoreButtonVisibility = new(A())(this._getRestoreButtonVisibility()), this._createActions(), this._visibilityTypeProperty = (0, a.actualBehavior)(), this._visibilityTypeProperty.subscribe(this, (t => {
                        this._visibilityType.setValue(t.value())
                    })), this._visibilityType = new(A())(this._visibilityTypeProperty.value()), this._isPaneMaximize = new(A())(this._getIsPaneMaximizeValue()), this._isWidgetShow = new(A())(this._getIsWidgetShow()), this._backgroundThemeName = i.backgroundThemeName, this._renderer = new m(l, this._actions, {
                        visibilityType: this._visibilityType.readonly(),
                        globalVisibility: this._isWidgetShow.readonly(),
                        doNotSwitchToContextMenuMode: this._isPaneMaximize.readonly(),
                        forceContextMenuMode: this._connectedToBroker.readonly(),
                        themedColor: this._themedColor.readonly()
                    })
                }
                destroy() {
                    this._visibilityTypeProperty.unsubscribeAll(this), this._renderer.destroy(), this._isDestroyed = !0
                }
                getElement() {
                    return this._renderer.getElement()
                }
                bottomWithMargin() {
                    return this._renderer.bottomWithMargin()
                }
                action() {
                    return this._actions
                }
                update() {
                    this._updateButtonsVisibility(), this._isPaneMaximize.setValue(this._getIsPaneMaximizeValue()), this._isWidgetShow.setValue(this._getIsWidgetShow())
                }
                updateWidgetModeByWidth(t) {
                    this._renderer.updateWidgetModeByWidth(t)
                }
                updateThemedColors(t) {
                    null === t && (t = (0, T.getStdThemedValue)("chartProperties.paneProperties.background", this._backgroundThemeName.value())), this._themedColor.setValue(t || "")
                }
                async _subscribeOnConnectedToBroker() {
                    const t = await waitTradingService();
                    this._isDestroyed || (t.onConnectionStatusChange.subscribe(this, this._updateConnectedToBroker.bind(this)), this._updateConnectedToBroker(t.connectStatus()))
                }
                _updateConnectedToBroker(t) {
                    this._connectedToBroker.setValue(1 === t)
                }
                _updateButtonsVisibility() {
                    this._closeButtonVisibility.setValue(this._getCloseButtonVisibility()), this._upButtonVisibility.setValue(this._getUpButtonVisibility()), this._downButtonVisibility.setValue(this._getDownButtonVisibility()), this._maximizeButtonVisibility.setValue(this._getMaximizeButtonVisibility()), this._minimizeButtonVisibility.setValue(this._getMinimizeButtonVisibility()), this._collapseButtonVisibility.setValue(this._getCollapseButtonVisibility()), this._restoreButtonVisibility.setValue(this._getRestoreButtonVisibility())
                }
                _createActions() {
                    this._actions.up = {
                        iconMap: new Map([
                            ["large", H],
                            ["small", H]
                        ]),
                        action: this._onUpDownButton.bind(this, "up"),
                        visible: this._upButtonVisibility,
                        title: new(A())(R),
                        className: _.up,
                        dataset: {
                            name: "pane-button-up"
                        }
                    }, this._actions.down = {
                        iconMap: new Map([
                            ["large", W],
                            ["small", W]
                        ]),
                        action: this._onUpDownButton.bind(this, "down"),
                        visible: this._downButtonVisibility,
                        title: new(A())(G),
                        className: _.down,
                        dataset: {
                            name: "pane-button-down"
                        }
                    }, this._actions.close = {
                        iconMap: new Map([
                            ["large", L],
                            ["small", L]
                        ]),
                        action: this._onCloseButton.bind(this),
                        visible: this._closeButtonVisibility,
                        title: new(A())(F),
                        dataset: {
                            name: "pane-button-close"
                        }
                    }, this._actions.maximize = {
                        iconMap: new Map([
                            ["large", P],
                            ["small", D]
                        ]),
                        action: this._onToggleMaximizeButton.bind(this, "Maximize pane"),
                        visible: this._maximizeButtonVisibility,
                        title: new(A())(U),
                        hotKeyTitle: X,
                        className: _.maximize,
                        dataset: {
                            name: "pane-button-maximize"
                        }
                    }, this._actions.minimize = {
                        iconMap: new Map([
                            ["large", P],
                            ["small", D]
                        ]),
                        action: this._onToggleMaximizeButton.bind(this, "Minimize pane"),
                        visible: this._minimizeButtonVisibility,
                        title: new(A())(j),
                        hotKeyTitle: X,
                        className: _.minimize,
                        dataset: {
                            name: "pane-button-minimize"
                        }
                    }, this._actions.collapse = {
                        iconMap: new Map([
                            ["large", I],
                            ["small", I]
                        ]),
                        action: this._onToggleCollapseButton.bind(this, "Collapse pane"),
                        visible: this._collapseButtonVisibility,
                        title: new(A())($),
                        hotKeyTitle: J,
                        className: _.collapse,
                        dataset: {
                            name: "pane-button-collapse"
                        }
                    }, this._actions.restore = {
                        iconMap: new Map([
                            ["large", N],
                            ["small", N]
                        ]),
                        action: this._onToggleCollapseButton.bind(this, "Restore pane"),
                        visible: this._restoreButtonVisibility,
                        title: new(A())(j),
                        hotKeyTitle: J,
                        className: _.restore,
                        dataset: {
                            name: "pane-button-restore"
                        }
                    }, this._actions.more = {
                        iconMap: new Map([
                            ["large", z],
                            ["small", B]
                        ]),
                        action: this._showButtonsInContextMenu.bind(this),
                        visible: new(A())(!O),
                        title: new(A())(Y),
                        dataset: {
                            name: "pane-button-more"
                        }
                    }
                }
                _getCloseButtonVisibility() {
                    const t = this._paneWidget.state();
                    let e = !1;
                    return t.containsMainSeries() || t.maximized().value() || O || (e = t.dataSources().some((t => (0,
                        r.isStudy)(t)))), e
                }
                _onCloseButton() {
                    this._trackEvent("Delete pane");
                    const t = this._model.model().panes().indexOf(this._paneWidget.state());
                    this._model.removePane(t)
                }
                _getUpButtonVisibility() {
                    const t = this._paneWidget.state();
                    return this._model.model().panes().indexOf(t) > 0 && !t.maximized().value() && !O
                }
                _getDownButtonVisibility() {
                    const t = this._paneWidget.state(),
                        e = this._model.model().panes();
                    return e.indexOf(t) < e.length - 1 && !t.maximized().value() && !O
                }
                _onUpDownButton(t) {
                    this._trackEvent(`Move pane ${t}`);
                    const e = this._model.model().panes().indexOf(this._paneWidget.state());
                    this._model.rearrangePanes(e, t)
                }
                _getMaximizeButtonVisibility() {
                    const t = this._paneWidget.state();
                    return this._model.model().panes().length > 1 && !t.maximized().value() && !O
                }
                _getMinimizeButtonVisibility() {
                    const t = this._paneWidget.state();
                    return this._model.model().panes().length > 1 && t.maximized().value()
                }
                _getCollapseButtonVisibility() {
                    if (O) return !1;
                    const t = this._paneWidget.state();
                    return !t.maximized().value() && !t.collapsed().value() && this._model.model().paneCollapsingAvailable().value()
                }
                _getRestoreButtonVisibility() {
                    const t = this._paneWidget.state();
                    return !t.maximized().value() && t.collapsed().value()
                }
                _onToggleMaximizeButton(t) {
                    this._trackEvent(t), this._callbacks.toggleMaximizePane(this._paneWidget)
                }
                _onToggleCollapseButton(t) {
                    this._trackEvent(t), this._callbacks.toggleCollapsedPane(this._paneWidget)
                }
                _showButtonsInContextMenu(t) {
                    t.preventDefault(), this._moreCMShown || function (t, e, i) {
                        const s = [];
                        if (t.maximize.visible.value()) {
                            const e = (0, d.ensure)(t.maximize.title),
                                i = (0, d.ensureNotNull)(t.maximize.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.MaximizePane",
                                icon: y,
                                label: e.value(),
                                statName: "Maximize Pane",
                                shortcutHint: f,
                                onExecute: () => i()
                            }))
                        } else if (t.minimize.visible.value()) {
                            const e = (0, d.ensure)(t.minimize.title),
                                i = (0, d.ensureNotNull)(t.minimize.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.MinimizePane",
                                icon: y,
                                label: e.value(),
                                statName: "Minimize Pane",
                                shortcutHint: f,
                                onExecute: () => i()
                            }))
                        }
                        if (t.collapse.visible.value()) {
                            const e = (0, d.ensure)(t.collapse.title),
                                i = (0, d.ensureNotNull)(t.collapse.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.CollapsePane",
                                icon: M,
                                label: e.value(),
                                statName: "Collapse pane",
                                shortcutHint: k,
                                onExecute: () => i()
                            }))
                        }
                        if (t.restore.visible.value()) {
                            const e = (0, d.ensure)(t.restore.title),
                                i = (0, d.ensureNotNull)(t.restore.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.RestorePane",
                                icon: C,
                                label: e.value(),
                                statName: "Restore pane",
                                shortcutHint: k,
                                onExecute: () => i()
                            }))
                        }
                        if (t.up.visible.value()) {
                            const e = (0, d.ensure)(t.up.title),
                                i = (0, d.ensureNotNull)(t.up.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.MovePaneUp",
                                icon: w,
                                label: e.value(),
                                statName: "Move pane up",
                                onExecute: () => i()
                            }))
                        }
                        if (t.down.visible.value()) {
                            const e = (0, d.ensure)(t.down.title),
                                i = (0, d.ensureNotNull)(t.down.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.MovePaneDown",
                                icon: S,
                                label: e.value(),
                                statName: "Move pane down",
                                onExecute: () => i()
                            }))
                        }
                        if (t.close.visible.value()) {
                            const e = (0, d.ensure)(t.close.title),
                                i = (0, d.ensureNotNull)(t.close.action);
                            s.push(new g.Action({
                                actionId: "Chart.PaneControls.DeletePane",
                                icon: b,
                                label: e.value(),
                                statName: "Delete pane",
                                onExecute: () => i()
                            }))
                        }
                        const l = (0, d.ensureNotNull)(e.target).getBoundingClientRect();
                        return v.ContextMenuManager.showMenu(s, {
                            clientX: l.right,
                            clientY: l.top + l.height + 3,
                            attachToXBy: "right"
                        }, void 0, void 0, i)
                    }(this._actions, t, (() => {
                        this._moreCMShown = !1
                    })).then((() => {
                        this._moreCMShown = !0
                    }))
                }
                _getIsPaneMaximizeValue() {
                    return this._paneWidget.state().maximized().value()
                }
                _getIsWidgetShow() {
                    return this._model.model().panes().length > 1
                }
                _trackEvent(t) {
                    (0, l.trackEvent)("GUI", "Pane action", t)
                }
            }
        },
        34926: (t, e, i) => {
            "use strict";
            i.d(e, {
                createActionElement: () => l
            });
            var s = i(1722);

            function l(t, e, i, l, o) {
                const n = document.createElement("div");
                n.className = e, n.classList.toggle(l, !t.visible.value()), Object.assign(n.dataset, t.dataset), void 0 !== t.className && n.classList.add(t.className), void 0 !== t.title && (n.classList.add("apply-common-tooltip"), n.setAttribute("title", t.title.value()), void 0 !== t.hotKeyTitle && (n.dataset.tooltipHotkey = t.hotKeyTitle)), n.addEventListener("touchend", t.action), n.addEventListener("mousedown", (e => {
                    0 === e.button && t.action(e)
                }));
                const a = document.createElement("div");
                a.classList.add(i);
                const r = t.iconMap.get(o) || "";
                return (0, s.isString)(r) ? a.innerHTML = r : a.appendChild(r), n.appendChild(a), n
            }
        },
        65616: (t, e, i) => {
            "use strict";
            i.d(e, {
                trackingModeIsAvailable: () => s
            });
            const s = i(49483).CheckMobile.any()
        },
        89612: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.26 4.44a.75.75 0 0 1 1.05.07l3.5 4c.25.28.25.7 0 .98l-3.5 4a.75.75 0 0 1-1.12-.98L10.25 9 7.2 5.5a.75.75 0 0 1 .07-1.06Z"/></svg>'
        },
        23317: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14 10H4V8.5h10V10Z"/></svg>'
        },
        77576: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.25 13.75v-9.5h1.5v9.5h-1.5Z"/><path fill="currentColor" d="M13.75 9.75h-9.5v-1.5h9.5v1.5Z"/></svg>'
        },
        85877: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><g class="corner-left-top"><path fill="currentColor" d="M3.25 7V4.5C3.25 3.80964 3.80964 3.25 4.5 3.25H7V1.75H4.5C2.98122 1.75 1.75 2.98122 1.75 4.5V7H3.25Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M3.25 11V13.5C3.25 14.1904 3.80964 14.75 4.5 14.75H7V16.25H4.5C2.98122 16.25 1.75 15.0188 1.75 13.5V11H3.25Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M14.75 4.5V7H16.25V4.5C16.25 2.98122 15.0188 1.75 13.5 1.75H11V3.25H13.5C14.1904 3.25 14.75 3.80964 14.75 4.5Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M14.75 11V13.5C14.75 14.1904 14.1904 14.75 13.5 14.75H11V16.25H13.5C15.0188 16.25 16.25 15.0188 16.25 13.5V11H14.75Z"/></g></svg>'
        },
        47725: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><g class="corner-left-top"><path fill="currentColor" d="M5.75 2V4.5C5.75 5.19036 5.19036 5.75 4.5 5.75H2V7.25H4.5C6.01878 7.25 7.25 6.01878 7.25 4.5V2H5.75Z"/></g><g class="corner-left-bottom"><path fill="currentColor" d="M5.75 16V13.5C5.75 12.8096 5.19036 12.25 4.5 12.25H2V10.75H4.5C6.01878 10.75 7.25 11.9812 7.25 13.5V16H5.75Z"/></g><g class="corner-right-top"><path fill="currentColor" d="M12.25 4.5V2H10.75V4.5C10.75 6.01878 11.9812 7.25 13.5 7.25H16V5.75H13.5C12.8096 5.75 12.25 5.19036 12.25 4.5Z"/></g><g class="corner-right-bottom"><path fill="currentColor" d="M12.25 16V13.5C12.25 12.8096 12.8096 12.25 13.5 12.25H16V10.75H13.5C11.9812 10.75 10.75 11.9812 10.75 13.5V16H12.25Z"/></g></svg>'
        },
        78529: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.45 3.5 12.48 9l-5.03 5.49 1.1 1.01L14.52 9 8.55 2.49 7.45 3.5Z"/><path fill="currentColor" d="m3.93 5.99 2.58 3-2.58 3.02 1.14.98 3.42-4-3.42-3.98L3.93 6Z"/></svg>'
        },
        93724: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M10 6.38V8L6 5.5 10 3v1.85A5.25 5.25 0 1 1 3.75 10a.75.75 0 0 1 1.5 0A3.75 3.75 0 1 0 10 6.38Z"/></svg>'
        },
        79304: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 2.5c-1.06 0-1.88.93-1.75 1.98l.63 5.03a1.13 1.13 0 0 0 2.25 0l.62-5.03A1.77 1.77 0 0 0 9 2.5zm0 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>'
        },
        38373: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M9 4c-.79 0-1.38.7-1.25 1.48l.67 4.03a.59.59 0 0 0 1.16 0l.67-4.03A1.27 1.27 0 0 0 9 4zm0 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>'
        },
        45503: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M13.5 4.5l-9 9M4.5 4.5l9 9"/></svg>'
        },
        73710: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M12.5 5.5l-7 7m0-7l7 7"/></svg>'
        },
        31233: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.57 14.8H5.03V3.36c1.62-.05 2.64-.08 3.06-.08 1.66 0 2.98.49 3.96 1.47a5.23 5.23 0 0 1 1.47 3.88c0 4.11-1.99 6.17-5.95 6.17zm-.5-9.66v7.8c.32.04.67.06 1.05.06 1.03 0 1.83-.38 2.41-1.12.58-.75.88-1.79.88-3.13 0-2.44-1.14-3.67-3.42-3.67-.22 0-.53.02-.93.06z"/></svg>'
        },
        12646: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.84 13.7H5.78V4.4l2.48-.06c1.35 0 2.42.4 3.22 1.2.8.78 1.19 1.83 1.19 3.15 0 3.34-1.61 5.01-4.83 5.01zm-.41-7.85v6.35c.26.02.55.03.86.03.83 0 1.48-.3 1.95-.9.48-.6.72-1.46.72-2.54 0-2-.93-2.99-2.78-2.99-.18 0-.43.02-.75.05z"/></svg>'
        },
        69410: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.65 5.16v2.68h3.78v1.73H7.65V13h5.19v1.8H5.62V3.35h7.3v1.8H7.65z"/></svg>'
        },
        55593: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.9 5.87v2.17h3.07v1.4H7.9v2.8h4.22v1.46H6.25V4.4h5.94v1.47H7.9z"/></svg>'
        },
        23683: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M7.2 7.34c0-1.4.73-2.64 1.82-3.34A5.03 5.03 0 0 0 4 9c0 2.76 2.26 5 5.05 5A5.04 5.04 0 0 0 14 10c-.71.8-1.74 1.29-2.89 1.29A3.93 3.93 0 0 1 7.2 7.34Z"/><path fill="currentColor" d="M11.67 6.33 11 5l-.67 1.33-1.33.2.98 1.03L9.76 9 11 8.34l1.24.66-.22-1.44.98-1.03-1.33-.2Z"/></svg>'
        },
        72844: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M11 11.39c0-2.27 1.19-4.25 3-5.39-4.43.07-8 3.63-8 8 0 4.42 3.64 8 8.13 8A8.1 8.1 0 0 0 22 16a6.55 6.55 0 0 1-11-4.61Z"/><path fill="currentColor" d="m18 10-1-2-1 2-2 .3 1.47 1.54-.32 2.16L17 13l1.85 1-.32-2.16L20 10.29 18 10Z"/></svg>'
        },
        53218: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><rect width="10" height="4" fill="currentColor" rx="2" x="4" y="7"/></svg>'
        },
        62998: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="9" cy="9" r="5"/></svg>'
        },
        32140: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18" fill="none"><circle fill="currentColor" cx="9" cy="9" r="4"/></svg>'
        },
        25230: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M9.3 9l.9-4.53a1.23 1.23 0 1 0-2.4 0L8.7 9l-.9 4.53a1.23 1.23 0 1 0 2.4 0L9.3 9z"/><path fill="currentColor" d="M9.15 9.26l4.38-1.48a1.23 1.23 0 1 0-1.21-2.09L8.85 8.74l-4.38 1.48a1.23 1.23 0 1 0 1.21 2.09l3.47-3.05z"/><path fill="currentColor" d="M9.15 8.74L5.68 5.69a1.23 1.23 0 1 0-1.2 2.09l4.37 1.48 3.47 3.05a1.23 1.23 0 1 0 1.2-2.09L9.16 8.74z"/></svg>'
        },
        43401: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M13.29 4.8h-.09a4.2 4.2 0 1 0 .09 8.4 6 6 0 1 1 0-8.4z"/></svg>'
        },
        15507: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.57 5.5h-.07a3.5 3.5 0 1 0 .07 7A4.98 4.98 0 0 1 4 9a5 5 0 0 1 8.57-3.5z"/></svg>'
        },
        12462: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.58 12.1A3.86 3.86 0 0 0 9 6.75a3.87 3.87 0 0 0-3.58 5.33 7.74 7.74 0 0 1 7.16 0zM3.64 9.93l-2.3-.62.37-1.38 2.3.62-.37 1.38zM6.1 6.07L5.07 3.92l1.3-.6 1 2.15-1.29.6zM10.62 5.47l1-2.16 1.3.6-1.01 2.16-1.3-.6zM13.99 8.55l2.3-.62.36 1.38-2.3.62L14 8.55z"/></svg>'
        },
        85290: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M12.22 11.78A3.47 3.47 0 0 0 9 6.98a3.48 3.48 0 0 0-3.22 4.8 6.97 6.97 0 0 1 6.44 0zM4.18 9.83L2.1 9.28l.33-1.24 2.07.55-.33 1.24zM6.38 6.36l-.9-1.94 1.16-.54.9 1.94-1.16.54zM10.46 5.82l.9-1.94 1.16.54-.9 1.94-1.16-.54zM13.49 8.6l2.07-.56.33 1.24-2.07.55-.33-1.24z"/></svg>'
        },
        91665: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M14.48 5.1c-.52 2.03-1.46 3.04-2.82 3.04-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.37-1.58 1.13H3.55A4.3 4.3 0 0 1 4.5 6c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.55 2.52.55.8 0 1.32-.37 1.59-1.13h1.29zm0 4.84c-.52 2.02-1.46 3.03-2.82 3.03-.64 0-1.55-.19-2.74-.56-1.17-.38-1.99-.57-2.46-.57-.69 0-1.22.38-1.58 1.13H3.55a4.3 4.3 0 0 1 .95-2.14c.5-.6 1.08-.9 1.74-.9.7 0 1.65.2 2.84.58 1.2.37 2.04.56 2.52.56.8 0 1.32-.38 1.59-1.13h1.29z"/></svg>'
        },
        52828: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M13.4 5.9c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.45-1.96-.45-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.71.4-.48.86-.72 1.4-.72.56 0 1.31.16 2.27.46.95.3 1.62.45 2.01.45.64 0 1.06-.3 1.27-.9h1.03zm0 3.87c-.41 1.62-1.16 2.43-2.25 2.43-.52 0-1.25-.15-2.2-.45-.93-.3-1.58-.46-1.96-.46-.55 0-.98.3-1.27.9H4.66c.1-.67.36-1.24.76-1.7.4-.48.86-.72 1.4-.72.56 0 1.31.15 2.27.46.95.3 1.62.44 2.01.44.64 0 1.06-.3 1.27-.9h1.03z"/></svg>'
        },
        39379: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M4 6.5 6 8l3-3 3 3 2-1.5V10H4V6.5ZM14 13v-2H4v2h10Z"/></svg>'
        },
        52506: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M15.82 14l5.36-5.36-.82-.82L15 13.18 9.64 7.82l-.82.82L14.18 14l-5.36 5.36.82.82L15 14.82l5.36 5.36.82-.82L15.82 14z"/></svg>'
        },
        88658: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.35 6.35l-10 10-.7-.7 10-10 .7.7z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6.65 6.35l10 10 .7-.7-10-10-.7.7z"/></svg>'
        },
        41674: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="30" height="24" fill="none"><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="normal-eye"><path d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/><path d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></g><g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" class="crossed-eye"><path d="M8.85 16.27c.92.44 1.97.73 3.15.73 2.7 0 4.7-1.49 6-2.91 0 0 2-2.09 2-3.09s-2-3.09-2-3.09l-.39-.4-.7.7.34.38S19 10.5 19 11c0 .5-1.75 2.41-1.75 2.41C16.05 14.74 14.3 16 12 16c-.88 0-1.68-.18-2.4-.48l-.75.75zM7.1 13.78l-.36-.37S5 11.5 5 11c0-.5 1.74-2.41 1.74-2.41C7.94 7.26 9.7 6 12 6c.88 0 1.68.18 2.4.48l.75-.75A7.17 7.17 0 0 0 12 5C9.3 5 7.3 6.49 6 7.91 6 7.91 4 10 4 11s2 3.09 2 3.09l.39.4.7-.7z"/><path d="M11.22 13.9a3 3 0 0 0 3.68-3.68l-.9.9A2 2 0 0 1 12.13 13l-.9.9zm.66-4.9A2 2 0 0 0 10 10.88l-.9.9a3 3 0 0 1 3.68-3.68l-.9.9zM5.65 16.65l12-12 .7.7-12 12-.7-.7z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M18 7.91C16.7 6.5 14.7 5 12 5S7.3 6.49 6 7.91C6 7.91 4 10 4 11s2 3.09 2 3.09C7.3 15.5 9.3 17 12 17s4.7-1.49 6-2.91c0 0 2-2.09 2-3.09s-2-3.09-2-3.09zm-11.26 5.5C7.94 14.74 9.7 16 12 16s4.05-1.26 5.25-2.59c0 0 1.75-1.91 1.75-2.41 0-.5-1.75-2.41-1.75-2.41C16.05 7.26 14.3 6 12 6S7.95 7.26 6.74 8.59C6.74 8.59 5 10.5 5 11c0 .5 1.74 2.41 1.74 2.41z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11a2.5 2.5 0 1 0-2.5 2.5"/></g></svg>'
        },
        3792: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><g class="normal-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z"/></g><g class="crossed-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.8503 16.2712C9.76531 16.7135 10.8152 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366C17.8729 7.77954 17.7448 7.64491 17.6105 7.51105L16.9035 8.2181C17.0254 8.33968 17.1425 8.46276 17.2549 8.58634C17.2549 8.58634 19 10.5 19 11C19 11.5 17.2549 13.4137 17.2549 13.4137C16.0532 14.7355 14.3022 16 11.9999 16C11.1218 16 10.324 15.8161 9.60627 15.5153L8.8503 16.2712ZM7.09663 13.7823C6.97455 13.6606 6.85728 13.5374 6.74482 13.4137C6.74482 13.4137 5 11.5 5 11C5 10.5 6.74482 8.58634 6.74482 8.58634C7.94648 7.26451 9.69746 6 11.9999 6C12.8781 6 13.6761 6.18398 14.394 6.48495L15.1499 5.729C14.2348 5.28657 13.1847 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C6.12693 14.2206 6.25516 14.3553 6.38959 14.4893L7.09663 13.7823Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M11.2231 13.8984C11.4709 13.9647 11.7313 14 12 14C13.6569 14 15 12.6569 15 11C15 10.7313 14.9647 10.4709 14.8984 10.2231L13.9961 11.1254C13.934 12.1301 13.1301 12.934 12.1254 12.9961L11.2231 13.8984ZM11.8751 9.00384C10.87 9.06578 10.0658 9.87001 10.0038 10.8751L9.10166 11.7772C9.03535 11.5294 9 11.2688 9 11C9 9.34315 10.3431 8 12 8C12.2688 8 12.5294 8.03535 12.7772 8.10166L11.8751 9.00384Z"/><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M5.64648 16.6465L17.6465 4.64648L18.3536 5.35359L6.35359 17.3536L5.64648 16.6465Z"/></g><g class="loading-eye"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M17.9948 7.91366C16.6965 6.48549 14.6975 5 11.9999 5C9.30225 5 7.30322 6.48549 6.00488 7.91366C6.00488 7.91366 4 10 4 11C4 12 6.00488 14.0863 6.00488 14.0863C7.30322 15.5145 9.30225 17 11.9999 17C14.6975 17 16.6965 15.5145 17.9948 14.0863C17.9948 14.0863 20 12 20 11C20 10 17.9948 7.91366 17.9948 7.91366ZM6.74482 13.4137C7.94648 14.7355 9.69746 16 11.9999 16C14.3022 16 16.0532 14.7355 17.2549 13.4137C17.2549 13.4137 19 11.5 19 11C19 10.5 17.2549 8.58634 17.2549 8.58634C16.0532 7.26451 14.3022 6 11.9999 6C9.69746 6 7.94648 7.26451 6.74482 8.58634C6.74482 8.58634 5 10.5 5 11C5 11.5 6.74482 13.4137 6.74482 13.4137Z"/></g><g class="animated-loading-eye"><path stroke="currentColor" stroke-linecap="round" d="M14.5 11C14.5 9.61929 13.3807 8.5 12 8.5C10.6193 8.5 9.5 9.61929 9.5 11C9.5 12.3807 10.6193 13.5 12 13.5"/></g></svg>'
        },
        45534: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 2 30 24" width="30" height="24" fill="none"><circle stroke="currentColor" stroke-width="1.15" cx="8.08" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="15" cy="14" r="1.73"/><circle stroke="currentColor" stroke-width="1.15" cx="21.92" cy="14" r="1.73"/></svg>'
        },
        87258: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 4" width="16" height="4" fill="none"><circle stroke="currentColor" cx="2" cy="2" r="1.5"/><circle stroke="currentColor" cx="8" cy="2" r="1.5"/><circle stroke="currentColor" cx="14" cy="2" r="1.5"/></svg>'
        },
        36885: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M8.54.84a.8.8 0 0 1 .92 0l7.5 5.25a.8.8 0 0 1 0 1.32l-7.5 5.25a.8.8 0 0 1-.92 0L1.04 7.4a.8.8 0 0 1 0-1.32L8.54.84zM2.9 6.75L9 11.02l6.1-4.27L9 2.48 2.9 6.75z"/><path fill="currentColor" d="M.84 10.8a.8.8 0 0 1 1.12-.2L9 15.51l7.04-4.93a.8.8 0 0 1 .92 1.32l-7.5 5.25a.8.8 0 0 1-.92 0l-7.5-5.25a.8.8 0 0 1-.2-1.12z"/></svg>'
        },
        65300: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M7.23 2.58a.5.5 0 0 1 .54 0l5.5 3.5a.5.5 0 0 1 0 .84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1 0-.84l5.5-3.5zM2.93 6.5L7.5 9.4l4.57-2.9L7.5 3.6 2.93 6.5z"/><path fill="currentColor" d="M1.58 9.23a.5.5 0 0 1 .69-.15L7.5 12.4l5.23-3.33a.5.5 0 0 1 .54.84l-5.5 3.5a.5.5 0 0 1-.54 0l-5.5-3.5a.5.5 0 0 1-.15-.69z"/></svg>'
        },
        34882: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" width="24" height="22" fill="none"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5A2.5 2.5 0 0 1 8.5 4H10v1H8.5C7.67 5 7 5.67 7 6.5v1.15a3.5 3.5 0 0 1-1.93 3.13l-.45.22.45.22A3.5 3.5 0 0 1 7 14.35v1.15c0 .83.67 1.5 1.5 1.5H10v1H8.5A2.5 2.5 0 0 1 6 15.5v-1.15a2.5 2.5 0 0 0-1.38-2.23l-1.34-.67a.5.5 0 0 1 0-.9l1.34-.67A2.5 2.5 0 0 0 6 7.65V6.5zM15.5 5H14V4h1.5A2.5 2.5 0 0 1 18 6.5v1.15c0 .94.54 1.8 1.38 2.23l1.34.67a.5.5 0 0 1 0 .9l-1.34.67A2.5 2.5 0 0 0 18 14.35v1.15a2.5 2.5 0 0 1-2.5 2.5H14v-1h1.5c.83 0 1.5-.67 1.5-1.5v-1.15a3.5 3.5 0 0 1 1.93-3.13l.45-.22-.45-.22A3.5 3.5 0 0 1 17 7.65V6.5c0-.83-.67-1.5-1.5-1.5z"/></svg>'
        },
        83637: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14" fill="none"><path fill="currentColor" fill-rule="evenodd" d="M8.63 1.08a2.04 2.04 0 0 1-3.26 0c-.51.14-1 .35-1.45.6l.01.2A2.05 2.05 0 0 1 1.7 3.93a6.1 6.1 0 0 0-.6 1.45 2.04 2.04 0 0 1 0 3.26c.13.51.34 1 .6 1.45l.2-.01a2.05 2.05 0 0 1 2.03 2.24c.45.26.94.47 1.45.6a2.04 2.04 0 0 1 3.26 0c.51-.13 1-.34 1.45-.6l-.01-.2a2.05 2.05 0 0 1 2.24-2.03c.26-.45.47-.94.6-1.45a2.04 2.04 0 0 1 0-3.26 6.1 6.1 0 0 0-.6-1.45 2.05 2.05 0 0 1-2.23-2.23 6.1 6.1 0 0 0-1.45-.6zM7.84.42c.17-.24.43-.47.72-.4.84.18 1.62.5 2.32.96.23.15.26.48.22.76a1.03 1.03 0 0 0 1.16 1.16c.28-.04.6-.01.76.22.45.7.78 1.48.97 2.32.06.29-.17.55-.41.72a1.02 1.02 0 0 0 0 1.68c.24.17.47.43.4.72a7.12 7.12 0 0 1-.96 2.32c-.15.23-.48.26-.76.22a1.03 1.03 0 0 0-1.17 1.01l.01.15c.04.28.01.6-.22.76-.7.45-1.48.78-2.32.97-.29.06-.55-.17-.72-.41a1.02 1.02 0 0 0-1.68 0c-.17.24-.43.47-.72.4a7.12 7.12 0 0 1-2.32-.96c-.23-.15-.26-.48-.22-.76v-.15a1.02 1.02 0 0 0-1.16-1c-.28.03-.6 0-.76-.23A7.12 7.12 0 0 1 0 8.56c-.06-.29.17-.55.41-.72a1.02 1.02 0 0 0 0-1.68c-.24-.17-.47-.43-.4-.72.18-.84.5-1.62.96-2.32.15-.23.48-.26.76-.22h.15a1.02 1.02 0 0 0 1-1.16c-.03-.28 0-.6.23-.76C3.82.53 4.6.2 5.44 0c.29-.06.55.17.72.41a1.02 1.02 0 0 0 1.68 0zM9 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>'
        },
        72237: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.65 12.35l-9-9 .7-.7 9 9-.7.7z"/><path fill="currentColor" d="M2.65 11.65l9-9 .7.7-9 9-.7-.7z"/></svg>'
        },
        71402: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="M11 2 7.5 5 4 2" class="bracket-up"/><path stroke="currentColor" d="M4 13l3.5-3 3.5 3" class="bracket-down"/></svg>'
        },
        36016: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M7.65 8.35l.7-.7 6.15 6.14 6.15-6.14.7.7-6.14 6.15 6.14 6.15-.7.7-6.15-6.14-6.15 6.14-.7-.7 6.14-6.15-6.14-6.15z"/></svg>'
        },
        20465: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="M20.53 3.73 14 9.33 7.47 3.73M7.47 24.27l6.53 -5.60 6.53 5.60"/></svg>'
        },
        48344: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M14 7v12.93l5.18-4.31.64.76-6.32 5.27-6.32-5.27.64-.76L13 19.93V7h1z"/></svg>'
        },
        99539: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6zM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32z"/></svg>'
        },
        34763: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" d="m7.47 9.33 6.53 -5.60L20.53 9.33M20.53 18.67l-6.53 5.60L7.47 18.67"/></svg>'
        },
        72899: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M13.5 6.35l6.32 5.27-.64.76L14 8.07V21h-1V8.07l-5.18 4.31-.64-.76 6.32-5.27z"/></svg>'
        },
        70471: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><circle fill="currentColor" cx="15" cy="9" r="1.5"/><circle fill="currentColor" cx="9" cy="9" r="1.5"/><circle fill="currentColor" cx="3" cy="9" r="1.5"/></svg>'
        },
        82847: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><circle fill="currentColor" cx="12.75" cy="7.5" r="1.25"/><circle fill="currentColor" cx="7.5" cy="7.5" r="1.25"/><circle fill="currentColor" cx="2.25" cy="7.5" r="1.25"/></svg>'
        },
        3515: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 8.88l-.66-.76L8 10.9V3H7v7.9L3.83 8.12l-.66.76 4.33 3.78 4.33-3.78z"/></svg>'
        },
        7859: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.5 2.8a.7.7 0 0 0-.7.7V6H1.2V3.5a2.3 2.3 0 0 1 2.3-2.3h11a2.3 2.3 0 0 1 2.3 2.3V6h-1.6V3.5a.7.7 0 0 0-.7-.7h-11z" class="bracket-up"/><path fill="currentColor" d="M3.5 15.2a.7.7 0 0 1-.7-.7V12H1.2v2.5a2.3 2.3 0 0 0 2.3 2.3h11a2.3 2.3 0 0 0 2.3-2.3V12h-1.6v2.5a.7.7 0 0 1-.7.7h-11z" class="bracket-down"/></svg>'
        },
        79526: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path fill="currentColor" d="M4.5 12A1.5 1.5 0 0 1 3 10.5V9H2v1.5A2.5 2.5 0 0 0 4.5 13h6a2.5 2.5 0 0 0 2.5-2.5V9h-1v1.5c0 .83-.67 1.5-1.5 1.5h-6z" class="bracket-up"/><path fill="currentColor" d="M4.5 3C3.67 3 3 3.67 3 4.5V6H2V4.5A2.5 2.5 0 0 1 4.5 2h6A2.5 2.5 0 0 1 13 4.5V6h-1V4.5c0-.83-.67-1.5-1.5-1.5h-6z" class="bracket-down"/></svg>'
        },
        42930: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15" fill="none"><path stroke="currentColor" d="m4 5 3.5-3L11 5" class="bracket-up"/><path stroke="currentColor" d="M11 10l-3.5 3L4 10" class="bracket-down"/></svg>'
        },
        81020: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M11.83 6.12l-.66.76L8 4.1V12H7V4.1L3.83 6.88l-.66-.76L7.5 2.34l4.33 3.78z"/></svg>'
        },
        62920: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="currentColor" d="M2.4 5.46a.8.8 0 0 1 1.14-.05L8 9.42l4.46-4.01a.8.8 0 0 1 1.08 1.18L8 11.58 2.47 6.59a.8.8 0 0 1-.06-1.13z"/></svg>'
        },
        47036: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" width="15" height="15"><path fill="currentColor" d="M3.5 5.58c.24-.28.65-.3.92-.07L7.5 8.14l3.08-2.63a.65.65 0 1 1 .84.98L7.5 9.86 3.58 6.49a.65.65 0 0 1-.07-.91z"/></svg>'
        },
        42205: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 7L7 4H4V0H3V4H0L3.5 7Z"/></svg>'
        },
        50119: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M.5 3.5L4 0v3h5v1H4v3z"/></svg>'
        },
        62884: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 7" width="9" height="7"><path fill="currentColor" d="M8.5 3.5L5 0v3H0v1h5v3z"/></svg>'
        },
        50662: t => {
            t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 7" width="7" height="7"><path fill="currentColor" d="M3.5 0L0 3h3v4h1V3h3L3.5 0z"/></svg>'
        }
    }
]);