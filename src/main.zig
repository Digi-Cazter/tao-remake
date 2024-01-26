const std = @import("std");

pub fn main() !void {
    while (true) {
        std.debug.print("Run `zig build test` to run the tests.\n", .{});
    }
}

export fn add() i32 {
    return 10 + 15;
}
