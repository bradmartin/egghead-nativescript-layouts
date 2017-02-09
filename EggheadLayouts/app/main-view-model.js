"use strict";
var observable_1 = require("data/observable");
var frame_1 = require("ui/frame");
var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        return _super.call(this) || this;
    }
    HelloWorldModel.prototype.goToStack = function () {
        frame_1.topmost().navigate('./pages/stack');
    };
    HelloWorldModel.prototype.goToAbsolute = function () {
        frame_1.topmost().navigate('./pages/absolute');
    };
    HelloWorldModel.prototype.goToFlex = function () {
        frame_1.topmost().navigate('./pages/flex');
    };
    HelloWorldModel.prototype.goToWrap = function () {
        frame_1.topmost().navigate('./pages/wrap');
    };
    HelloWorldModel.prototype.goToDock = function () {
        frame_1.topmost().navigate('./pages/dock');
    };
    HelloWorldModel.prototype.goToGrid = function () {
        frame_1.topmost().navigate('./pages/grid');
    };
    return HelloWorldModel;
}(observable_1.Observable));
exports.HelloWorldModel = HelloWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBNkM7QUFDN0Msa0NBQW1DO0FBRW5DO0lBQXFDLG1DQUFVO0lBRTNDO2VBQ0ksaUJBQU87SUFDWCxDQUFDO0lBRU0sbUNBQVMsR0FBaEI7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNNLHNDQUFZLEdBQW5CO1FBQ0ksZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNNLGtDQUFRLEdBQWY7UUFDSSxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVMLHNCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUFxQyx1QkFBVSxHQXlCOUM7QUF6QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd1aS9mcmFtZSc7XG5cbmV4cG9ydCBjbGFzcyBIZWxsb1dvcmxkTW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBnb1RvU3RhY2soKSB7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSgnLi9wYWdlcy9zdGFjaycpO1xuICAgIH1cbiAgICBwdWJsaWMgZ29Ub0Fic29sdXRlKCkge1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoJy4vcGFnZXMvYWJzb2x1dGUnKTtcbiAgICB9XG4gICAgcHVibGljIGdvVG9GbGV4KCkge1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoJy4vcGFnZXMvZmxleCcpO1xuICAgIH1cbiAgICBwdWJsaWMgZ29Ub1dyYXAoKSB7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSgnLi9wYWdlcy93cmFwJyk7XG4gICAgfVxuICAgIHB1YmxpYyBnb1RvRG9jaygpIHtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKCcuL3BhZ2VzL2RvY2snKTtcbiAgICB9XG4gICAgcHVibGljIGdvVG9HcmlkKCkge1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoJy4vcGFnZXMvZ3JpZCcpO1xuICAgIH1cblxufSJdfQ==