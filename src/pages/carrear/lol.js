(function (n, t) {
  function o() {
    var n = this._cloneProps(
      new this.constructor(
        this.mode,
        this.startPosition,
        this.loop,
        this.reversed
      )
    );
    return (
      n.gotoAndStop(this.currentFrame),
      (n.paused = this.paused),
      (n.framerate = this.framerate),
      n
    );
  }
  function f(t, i, r) {
    var u = n.extend(t, n.MovieClip);
    return (u.clone = o), (u.nominalBounds = i), (u.frameBounds = r), u;
  }
  var r,
    i = {},
    u = {},
    e = {};
  i.ssMetadata = [
    {
      name: 'map_atlas_1',
      frames: [
        [0, 922, 1401, 907],
        [0, 0, 1398, 920],
        [176, 1831, 39, 38],
        [92, 1831, 40, 38],
        [48, 1831, 42, 38],
        [47, 1871, 43, 38],
        [258, 1911, 36, 38],
        [176, 1871, 39, 38],
        [257, 1951, 37, 38],
        [135, 1951, 39, 38],
        [92, 1991, 41, 38],
        [334, 1986, 38, 33],
        [371, 1911, 36, 33],
        [375, 1946, 32, 33],
        [135, 1991, 39, 38],
        [296, 1831, 36, 38],
        [441, 1831, 26, 33],
        [409, 1911, 32, 33],
        [334, 1871, 35, 38],
        [406, 1831, 33, 33],
        [334, 1951, 39, 33],
        [176, 1991, 38, 38],
        [0, 1871, 45, 38],
        [47, 1911, 42, 38],
        [334, 1911, 35, 38],
        [296, 1871, 36, 38],
        [371, 1871, 32, 38],
        [438, 1866, 27, 38],
        [216, 1991, 38, 38],
        [257, 1831, 37, 38],
        [176, 1951, 39, 38],
        [296, 1911, 36, 38],
        [92, 1871, 40, 38],
        [374, 1986, 33, 38],
        [257, 1871, 37, 38],
        [0, 1911, 45, 38],
        [217, 1951, 38, 38],
        [256, 1991, 38, 38],
        [177, 1911, 39, 38],
        [134, 1831, 40, 38],
        [372, 1831, 32, 38],
        [134, 1871, 40, 38],
        [0, 1991, 44, 38],
        [46, 1991, 44, 38],
        [47, 1951, 42, 38],
        [91, 1911, 42, 38],
        [0, 1951, 45, 38],
        [217, 1831, 38, 38],
        [405, 1871, 31, 38],
        [217, 1871, 38, 38],
        [296, 1951, 36, 38],
        [0, 1831, 46, 38],
        [135, 1911, 40, 38],
        [218, 1911, 38, 38],
        [296, 1991, 36, 38],
        [334, 1831, 36, 38],
        [91, 1951, 42, 38],
      ],
    },
  ];
  (i.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = !1;
    this.gotoAndPlay = function (t) {
      n.MovieClip.prototype.gotoAndPlay.call(this, t);
    };
    this.play = function () {
      n.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (t) {
      n.MovieClip.prototype.gotoAndStop.call(this, t);
    };
    this.stop = function () {
      n.MovieClip.prototype.stop.call(this);
    };
  }).prototype = r = new n.MovieClip();
  (i.CachedBmp_57 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(0);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_56 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(1);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_55 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(2);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_54 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(3);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_53 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(4);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_52 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(5);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_51 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(6);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_50 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(7);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_49 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(8);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_48 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(9);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_47 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(10);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_46 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(11);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_45 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(12);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_44 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(13);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_43 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(14);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_42 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(15);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_41 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(16);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_40 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(17);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_39 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(18);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_38 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(19);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_37 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(20);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_36 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(21);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_35 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(22);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_34 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(23);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_33 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(24);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_32 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(25);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_31 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(26);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_30 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(27);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_29 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(28);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_28 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(29);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_27 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(30);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_26 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(31);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_25 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(32);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_24 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(33);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_23 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(34);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_22 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(35);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_21 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(36);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_20 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(37);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_19 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(38);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_18 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(39);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_17 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(40);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_16 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(41);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_15 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(42);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_14 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(43);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_13 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(44);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_12 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(45);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_11 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(46);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_10 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(47);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_9 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(48);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_8 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(49);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_7 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(50);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_6 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(51);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_5 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(52);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_4 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(53);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_3 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(54);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_2 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(55);
  }).prototype = r = new n.Sprite();
  (i.CachedBmp_1 = function () {
    this.initialize(u.map_atlas_1);
    this.gotoAndStop(56);
  }).prototype = r = new n.Sprite();
  (i.markRed = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#FF0000')
      .s()
      .p(
        'AgeAwQgegtgBgdQABgZASgSQARgSAZAAQAZAAATASQASASAAAZQAAAdgfAtQgQAXgPARQgOgRgQgXgAgPgpQgGAGAAAJQAAAKAGAGQAHAHAIAAQAJAAAHgHQAGgGAAgKQAAgJgGgGQgHgHgJABQgIgBgHAHg'
      );
    this.shape.setTransform(6.002, 8.512, 0.978, 0.9669);
    this.timeline.addTween(n.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = f(i.markRed, new n.Rectangle(0, 0, 12, 17), null);
  (i.markBlu = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#0095FD')
      .s()
      .p(
        'AgeAwQgegtgBgdQABgZASgSQARgSAZAAQAZAAATASQASASAAAZQAAAdgfAtQgQAXgPARQgOgRgQgXgAgPgpQgGAGAAAJQAAAKAGAGQAHAHAIAAQAJAAAHgHQAGgGAAgKQAAgJgGgGQgHgHgJABQgIgBgHAHg'
      );
    this.shape.setTransform(6.002, 8.512, 0.978, 0.9669);
    this.timeline.addTween(n.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = f(i.markBlu, new n.Rectangle(0, 0, 12, 17), null);
  (i.hitBtn = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.shape = new n.Shape();
    this.shape.graphics
      .f('rgba(44,44,44,0.008)')
      .s()
      .p('AiLCMIAAkXIEXAAIAAEXg');
    this.shape.setTransform(14, 14);
    this.timeline.addTween(n.Tween.get(this.shape).wait(1));
    this._renderFirstFrame();
  }).prototype = f(i.hitBtn, new n.Rectangle(0, 0, 28, 28), null);
  (i.area8 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'Ag6DWIixgkQAIgQgBgSIAHgvQAGgigGgXQgGgWgTgMQgYgTgRgdQgIgPgEgUQgEgUgFgGQgEgHgJgHQgMgHgJgLQgKgMAEgaQAHglgBgLQgBgagIgWIK/AAIgIBVQgMArgHAuQgCAUACAOQADANgDAPQgCAOgHAMQgHAMgCASQgCARACAUQADAWgDAWQgDAWgGAVQgIAWgDAZQgGAkgCAog'
      );
    this.shape.setTransform(35.175, 27.025);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#92D624')
      .s()
      .p(
        'Ag6DWIixgkQAIgQgBgSIAHgvQAGgigGgXQgGgWgTgMQgYgTgRgdQgIgPgEgUQgEgUgFgGQgEgHgJgHQgMgHgJgLQgKgMAEgaQAHglgBgLQgBgagIgWIK/AAIgIBVQgMArgHAuQgCAUACAOQADANgDAPQgCAOgHAMQgHAMgCASQgCARACAUQADAWgDAWQgDAWgGAVQgIAWgDAZQgGAkgCAog'
      );
    this.shape_1.setTransform(35.175, 27.025);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(0, 0, 70.4, 54.1);
  (i.area7 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AAdCKIkshPIAEgFQAEgSgEgTQgFgRgLgLQgCgBgOgCQgOgDgFgFQgGgFAGgNQAFgLAGgCQADgBAFAEQAEADADgGQAEgOABgGQABgNgGgKQgHgLgWgHQgbgJgOgHIg0gYIgfgPIAAg3IL2ABQAIAXABAZQABALgHAlQgEAbAKAMQAJAKAMAIQAJAGAEAHQAFAGAEAUQAEAVAIANQARAdAYAUQATAMAGAWQAGAXgGAiIgHAwQABARgIAQIAAABg'
      );
    this.shape.setTransform(44.6125, 22.5);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#92D624')
      .s()
      .p(
        'AAdCKIkshPIAEgFQAEgSgEgTQgFgRgLgLQgCgBgOgCQgOgDgFgFQgGgFAGgNQAFgLAGgCQADgBAFAEQAEADADgGQAEgOABgGQABgNgGgKQgHgLgWgHQgbgJgOgHIg0gYIgfgPIAAg3IL2ABQAIAXABAZQABALgHAlQgEAbAKAMQAJAKAMAIQAJAGAEAHQAFAGAEAUQAEAVAIANQARAdAYAUQATAMAGAWQAGAXgGAiIgHAwQABARgIAQIAAABg'
      );
    this.shape_1.setTransform(44.6125, 22.5);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(0, 0, 89.2, 45);
  (i.area6 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AImTJInBguQgJgSgPgRQAShAgTg/QgUg/gzgrQgGgGgfgSQgdgQgCgEQgIgMgDggQgCgcgPgMQghgYg8giQhEgmghgTQh3hHgbhAQgEgKAQghQAOgegJgNQgRgXgJgWQgLgcgLgXIg3hlQgmhFgCghQgBgLAOglQAOglAAgEQAAgHgLgeIgNgkQgDgVgOghQgRgpgDgMQgTg+AugmQgCAlAJARQAGALAgAcQgPgqgJgdQgPg1AMgLQASgRBCAYQA6AWAQAQQgMgYgEgGQgFgFgOgKQgkgagsgFQhEgIgIBKIgogkQgTgTgBgFQAEgWABgZQAAgPgdgzQgig8gLgsQgJglAUhWQAThUgNgrQgeheAFgeQACgOAvhaQAUgoAQhYQAPhUARgdIFsBlIEyBOIihKYILwRMQAAAjAHAQIAMAdQAGARABAUQgBALALAJQAPAMACAGQAIAWgTALIgpAWQgQAOgFAVIgIApQgFASgWAWQgXAYgFALQgEAJgDAbQgEAeAEAIQADAFAaASQATASgZAPIgUANQgFACgKAAIgKAAg'
      );
    this.shape.setTransform(53.5084, 91.3671, 0.7458, 0.7458);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#92D624')
      .s()
      .p(
        'AImTJInBguQgJgSgPgRQAShAgTg/QgUg/gzgrQgGgGgfgSQgdgQgCgEQgIgMgDggQgCgcgPgMQghgYg8giQhEgmghgTQh3hHgbhAQgEgKAQghQAOgegJgNQgRgXgJgWQgLgcgLgXIg3hlQgmhFgCghQgBgLAOglQAOglAAgEQAAgHgLgeIgNgkQgDgVgOghQgRgpgDgMQgTg+AugmQgCAlAJARQAGALAgAcQgPgqgJgdQgPg1AMgLQASgRBCAYQA6AWAQAQQgMgYgEgGQgFgFgOgKQgkgagsgFQhEgIgIBKIgogkQgTgTgBgFQAEgWABgZQAAgPgdgzQgig8gLgsQgJglAUhWQAThUgNgrQgeheAFgeQACgOAvhaQAUgoAQhYQAPhUARgdIFsBlIEyBOIihKYILwRMQAAAjAHAQIAMAdQAGARABAUQgBALALAJQAPAMACAGQAIAWgTALIgpAWQgQAOgFAVIgIApQgFASgWAWQgXAYgFALQgEAJgDAbQgEAeAEAIQADAFAaASQATASgZAPIgUANQgFACgKAAIgKAAg'
      );
    this.shape_1.setTransform(53.5084, 91.3671, 0.7458, 0.7458);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(0, 0, 107, 182.8);
  (i.area5 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f()
      .s('#414141')
      .ss(1.4, 0, 1)
      .p(
        'Ansm9IHOg9QgPAOgMAcQgFAOgDALQAIAWAeAPQAPAHANADQAMgBAKAGQALAGAGAKQALAnA3AqQAbAWAZANQBBAyAMATQAYAoAlAaQAnAZAQAaQAJANAAAJQAGAYAQANQAIAHAHACQAWATAEAeQAKAYAaAQQANAHALADIAKAEQggAtgOA3QgFA3gXA3QgIAXABApQABAVACAQQgugLgsAIQgOALAGAPQANAkgIAVQgDAKgHAEQgPADgKgWIgHgVIoAAlIghg7QgWgwgEg3QgJgrgMglQgCgFADgQQAGggAUgyQACgEgFgNQgJgYgegoQgRgcgLghg'
      );
    this.shape.setTransform(36.7222, 37.8346, 0.7457, 0.7457);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AEfHoIgHgVIoAAlIghg7QgWgwgEg3QgJgrgMglQgCgFADgQQAGggAUgyQABgEgEgNQgJgYgegoQgRgcgLghIiJnOIHNg9QgOAOgMAcIgJAZQAKAWAdAPQAQAHAMADQALgBALAGQALAGAGAKQALAnA2AqQAbAWAZANQBCAyAMATQAXAoAmAaQAnAZAQAaQAJANAAAJQAFAYARANQAHAHAIACQAWATAEAeQAKAYAaAQQANAHALADIAKAEQggAtgPA3QgEA3gYA3QgHAXABApQAAAVADAQQgugLgsAIQgOALAGAPQANAkgIAVQgEAKgGAEIgEAAQgMAAgJgTg'
      );
    this.shape_1.setTransform(36.7222, 37.8346, 0.7457, 0.7457);
    this.shape_2 = new n.Shape();
    this.shape_2.graphics
      .f('#92D624')
      .s()
      .p(
        'AEfHoIgHgVIoAAlIghg7QgWgwgEg3QgJgrgMglQgCgFADgQQAGggAUgyQABgEgEgNQgJgYgegoQgRgcgLghIiJnOIHNg9QgOAOgMAcIgJAZQAKAWAdAPQAQAHAMADQALgBALAGQALAGAGAKQALAnA2AqQAbAWAZANQBCAyAMATQAXAoAmAaQAnAZAQAaQAJANAAAJQAFAYARANQAHAHAIACQAWATAEAeQAKAYAaAQQANAHALADIAKAEQggAtgPA3QgEA3gYA3QgHAXABApQAAAVADAQQgugLgsAIQgOALAGAPQANAkgIAVQgEAKgGAEIgEAAQgMAAgJgTg'
      );
    this.shape_2.setTransform(36.7222, 37.8346, 0.7457, 0.7457);
    this.shape_3 = new n.Shape();
    this.shape_3.graphics
      .f('#92D624')
      .s()
      .p(
        'AEfHoIgHgVIoAAlIghg7QgWgwgEg3QgJgrgMglQgCgFADgQQAGggAUgyQABgEgEgNQgJgYgegoQgRgcgLghIiJnOIHNg9QgOAOgMAcIgJAZQAKAWAdAPQAQAHAMADQALgBALAGQALAGAGAKQALAnA2AqQAbAWAZANQBCAyAMATQAXAoAmAaQAnAZAQAaQAJANAAAJQAFAYARANQAHAHAIACQAWATAEAeQAKAYAaAQQANAHALADIAKAEQggAtgPA3QgEA3gYA3QgHAXABApQAAAVADAQQgugLgsAIQgOALAGAPQANAkgIAVQgEAKgGAEIgEAAQgMAAgJgTg'
      );
    this.shape_3.setTransform(36.7222, 37.8346, 0.7457, 0.7457);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(-1, -1, 75.5, 77.7);
  (i.area4 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(4));
    this.shape = new n.Shape();
    this.shape.graphics
      .f()
      .s('#414141')
      .ss(1.4, 0, 1)
      .p(
        'AgzAoQgFAJgBAJQAAAOgVANQgRAFgIARQgHAQgGAWQAHANgBAOQAmAeAsAYQAUgIAXABQAIANgIAcQAAALAIACQADABAEgCQAWgiAJg5QAJgXAQgVQAKgjARgfQAIgbgFhFIgIhAQgMAAgWgBIgUgCQgDgdALgcQAIgCAEgGQAFgGAAgIQAGgaAAgaIiWgxQgWASABAcQgKAfgVAVQALALACAPQACAQgHAOQgBATAQAVQAIAKAIAHQAQAOA0AnQgTAagWAWg'
      );
    this.shape.setTransform(8.7924, 20.354, 0.7457, 0.7457);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AAXERQgIgCAAgLQAIgcgIgNQgXgBgUAIQgsgYgmgeQABgOgHgNQAGgWAHgQQAIgRARgFQAVgNAAgOQABgJAFgJQAWgWATgaQg0gngQgOQgIgHgIgKQgQgVABgTQAHgOgCgQQgCgPgLgLQAVgVAKgfQgBgcAWgSICWAxQAAAagGAaQAAAIgFAGQgEAGgIACQgLAcADAdIAUACIAiABIAIBAQAFBFgIAbQgRAfgKAjQgQAVgJAXQgJA5gWAiIgEABIgDAAg'
      );
    this.shape_1.setTransform(8.7924, 20.354, 0.7457, 0.7457);
    this.shape_2 = new n.Shape();
    this.shape_2.graphics
      .f('#92D624')
      .s()
      .p(
        'AAXERQgIgCAAgLQAIgcgIgNQgXgBgUAIQgsgYgmgeQABgOgHgNQAGgWAHgQQAIgRARgFQAVgNAAgOQABgJAFgJQAWgWATgaQg0gngQgOQgIgHgIgKQgQgVABgTQAHgOgCgQQgCgPgLgLQAVgVAKgfQgBgcAWgSICWAxQAAAagGAaQAAAIgFAGQgEAGgIACQgLAcADAdIAUACIAiABIAIBAQAFBFgIAbQgRAfgKAjQgQAVgJAXQgJA5gWAiIgEABIgDAAg'
      );
    this.shape_2.setTransform(8.7924, 20.354, 0.7457, 0.7457);
    this.shape_3 = new n.Shape();
    this.shape_3.graphics
      .f('#92D624')
      .s()
      .p(
        'AAXERQgIgCAAgLQAIgcgIgNQgXgBgUAIQgsgYgmgeQABgOgHgNQAGgWAHgQQAIgRARgFQAVgNAAgOQABgJAFgJQAWgWATgaQg0gngQgOQgIgHgIgKQgQgVABgTQAHgOgCgQQgCgPgLgLQAVgVAKgfQgBgcAWgSICWAxQAAAagGAaQAAAIgFAGQgEAGgIACQgLAcADAdIAUACIAiABIAIBAQAFBFgIAbQgRAfgKAjQgQAVgJAXQgJA5gWAiIgEABIgDAAg'
      );
    this.shape_3.setTransform(8.7924, 20.354, 0.7457, 0.7457);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to(
          {
            state: [
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 2)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(-1, -1, 19.6, 42.7);
  (i.area3 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(4));
    this.shape = new n.Shape();
    this.shape.graphics
      .f()
      .s('#414141')
      .ss(1.4, 0, 1)
      .p(
        'AiUm4IFUgnIBIJcIgFAHQgEAIAHAMIAGAUQAAAXgYAQIgJAEQgQADgQAAQgYgLgKAgQgQAxgDAEQgUAXgIAKQgLAOgKAVQgCAFABARQAAALgOAGQgIAEgRgFQgQgFgIgGQgTgPgNARQgHALgJAeQgBAEgHACQgGACgEgCQgUgKgSAEQgRAFgLATQgBACgJAAQgJAAgEgDQghgTgrAUQg6AagPAAQgCgrAIgtQACgKAVgdQATgcACgQQABgJAPgnQAKgagKgZQgRgfgFgPQgHgaATgUIgyoYQAZAYAhgMQAUgHAjgbg'
      );
    this.shape.setTransform(19.9631, 35.8277, 0.7457, 0.7457);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AkFGIQACgKAVgdQATgcACgQQABgJAPgnQAKgagKgZQgRgfgFgPQgHgaATgUIgyoYQAZAYAhgMQAUgHAjgbIFUgnIBIJcIgFAHQgEAIAHAMIAGAUQAAAXgYAQIgJAEQgQADgQAAQgYgLgKAgQgQAxgDAEIgcAhQgLAOgKAVQgCAFABARQAAALgOAGQgIAEgRgFQgQgFgIgGQgTgPgNARQgHALgJAeQgBAEgHACQgGACgEgCQgUgKgSAEQgRAFgLATQgBACgJAAQgJAAgEgDQghgTgrAUQg6AagPAAQgCgrAIgtg'
      );
    this.shape_1.setTransform(19.9631, 35.8277, 0.7457, 0.7457);
    this.shape_2 = new n.Shape();
    this.shape_2.graphics
      .f('#92D624')
      .s()
      .p(
        'AkFGIQACgKAVgdQATgcACgQQABgJAPgnQAKgagKgZQgRgfgFgPQgHgaATgUIgyoYQAZAYAhgMQAUgHAjgbIFUgnIBIJcIgFAHQgEAIAHAMIAGAUQAAAXgYAQIgJAEQgQADgQAAQgYgLgKAgQgQAxgDAEIgcAhQgLAOgKAVQgCAFABARQAAALgOAGQgIAEgRgFQgQgFgIgGQgTgPgNARQgHALgJAeQgBAEgHACQgGACgEgCQgUgKgSAEQgRAFgLATQgBACgJAAQgJAAgEgDQghgTgrAUQg6AagPAAQgCgrAIgtg'
      );
    this.shape_2.setTransform(19.9631, 35.8277, 0.7457, 0.7457);
    this.shape_3 = new n.Shape();
    this.shape_3.graphics
      .f('#92D624')
      .s()
      .p(
        'AkFGIQACgKAVgdQATgcACgQQABgJAPgnQAKgagKgZQgRgfgFgPQgHgaATgUIgyoYQAZAYAhgMQAUgHAjgbIFUgnIBIJcIgFAHQgEAIAHAMIAGAUQAAAXgYAQIgJAEQgQADgQAAQgYgLgKAgQgQAxgDAEIgcAhQgLAOgKAVQgCAFABARQAAALgOAGQgIAEgRgFQgQgFgIgGQgTgPgNARQgHALgJAeQgBAEgHACQgGACgEgCQgUgKgSAEQgRAFgLATQgBACgJAAQgJAAgEgDQghgTgrAUQg6AagPAAQgCgrAIgtg'
      );
    this.shape_3.setTransform(19.9631, 35.8277, 0.7457, 0.7457);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape_1 }, { t: this.shape }] })
        .to(
          {
            state: [
              { t: this.shape_3 },
              { t: this.shape_2 },
              { t: this.shape },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_3 }, { t: this.shape_2 }] }, 2)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(-1, -1, 42, 73.7);
  (i.area2 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AlAElQgKgEgcACQgaABgFgDQgHgGgHgDIgDmTQgCgxgNhLIgNhBQgKgggBghIC1gEIEdgNIFIgVQASALAIAPQAIATgMAQQgEAFgLAIQgKAIgEAGQgHAJAAAHQAAAEAFALIBpgLQgQA9gbA8QgLASABAVQAAATgMAOQgRAVgIAWIgYAyQgFAQgCAQQgPAwggAqQgRARgDAVQgGAagLAXIgVAjIgFAcQgCAfAPATQAFAtgHAtIodAZg'
      );
    this.shape.setTransform(33.2058, 31.0456, 0.7458, 0.7458);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#92D624')
      .s()
      .p(
        'AlAElQgKgEgcACQgaABgFgDQgHgGgHgDIgDmTQgCgxgNhLIgNhBQgKgggBghIC1gEIEdgNIFIgVQASALAIAPQAIATgMAQQgEAFgLAIQgKAIgEAGQgHAJAAAHQAAAEAFALIBpgLQgQA9gbA8QgLASABAVQAAATgMAOQgRAVgIAWIgYAyQgFAQgCAQQgPAwggAqQgRARgDAVQgGAagLAXIgVAjIgFAcQgCAfAPATQAFAtgHAtIodAZg'
      );
    this.shape_1.setTransform(33.2058, 31.0456, 0.7458, 0.7458);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(0, 0, 66.5, 62.1);
  (i.area1 = function (t, i, r, u) {
    r == null && (r = !0);
    u == null && (u = !1);
    var f = {};
    f.mode = t;
    f.startPosition = i;
    f.labels = {};
    f.loop = r;
    f.reversed = u;
    n.MovieClip.apply(this, [f]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.shape = new n.Shape();
    this.shape.graphics
      .f('#2C2C2C')
      .s()
      .p(
        'AFeN9QgXgOgSABQgWABgngTQglgSgQADQgrAHgfg2QgdhDgRgVQgHgIgBgYQgCgPABgQQACgYgZgRQgdgUgDgSQgGgbgigvQgng0gIgVQgohkhDg2QhPhBhXAaQggAKgjAnQgiAmgMAjQgGAUhLgzIhVg/QglgagbhTQgdhagdgeQgPgPhKhWQg2g/gkgeIgBgDQgFgLgBgMIIAArIAalWIAamnIFJARIBQABIgLFJQAIABAOAJIAYASQAeATANgaQAKAHAFAKQADAGAEAQQABAEAUAEIAZAFQAFACAVADQAMABAKAJQADADAYgFQAagGAGABQAAARAPAQQAQATAOgOQAMgMAIAEIASALQAIABAKAEQAKADAPgDQgDAdARgPIAbgZQAJgCANADQALADAIADQAEACAOANIAVARQAYgYAqgIQAjgHAoAGQADAAAKgFQAGgEAQAKIAsAbQAHAFALADIASAHQAFACAFAFQADACAUgBQAVgBAHADIAJEIQATAMAMAdIATAwQANAcAEAKQAGAQABAUQAAAOgKAfQgLAcADAOIABAmQAAAngKAMQgKALgFAJIgDAHQgBAKADALQgcABgoATQgjASgXgFQgVgjgEAeQgCAIgBAVQgCASgDAFQgjAyh3BCIgEgDQgDgDgGgDQgLgFgWAJQgXAJASASQgtAXgWAUQgPAOgmAyQgTgHgEAbIgKA+IgOAmQgFASgBARQgBAHAUBFQASBBgHAhQgIgCgdgTg'
      );
    this.shape.setTransform(93.6761, 91.425);
    this.shape_1 = new n.Shape();
    this.shape_1.graphics
      .f('#92D624')
      .s()
      .p(
        'AFeN9QgXgOgSABQgWABgngTQglgSgQADQgrAHgfg2QgdhDgRgVQgHgIgBgYQgCgPABgQQACgYgZgRQgdgUgDgSQgGgbgigvQgng0gIgVQgohkhDg2QhPhBhXAaQggAKgjAnQgiAmgMAjQgGAUhLgzIhVg/QglgagbhTQgdhagdgeQgPgPhKhWQg2g/gkgeIgBgDQgFgLgBgMIIAArIAalWIAamnIFJARIBQABIgLFJQAIABAOAJIAYASQAeATANgaQAKAHAFAKQADAGAEAQQABAEAUAEIAZAFQAFACAVADQAMABAKAJQADADAYgFQAagGAGABQAAARAPAQQAQATAOgOQAMgMAIAEIASALQAIABAKAEQAKADAPgDQgDAdARgPIAbgZQAJgCANADQALADAIADQAEACAOANIAVARQAYgYAqgIQAjgHAoAGQADAAAKgFQAGgEAQAKIAsAbQAHAFALADIASAHQAFACAFAFQADACAUgBQAVgBAHADIAJEIQATAMAMAdIATAwQANAcAEAKQAGAQABAUQAAAOgKAfQgLAcADAOIABAmQAAAngKAMQgKALgFAJIgDAHQgBAKADALQgcABgoATQgjASgXgFQgVgjgEAeQgCAIgBAVQgCASgDAFQgjAyh3BCIgEgDQgDgDgGgDQgLgFgWAJQgXAJASASQgtAXgWAUQgPAOgmAyQgTgHgEAbIgKA+IgOAmQgFASgBARQgBAHAUBFQASBBgHAhQgIgCgdgTg'
      );
    this.shape_1.setTransform(93.6761, 91.425);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(0, 0, 187.4, 182.9);
  (i.markerBg = function (t, r, u, f) {
    u == null && (u = !0);
    f == null && (f = !1);
    var e = {};
    e.mode = t;
    e.startPosition = r;
    e.labels = {};
    e.loop = u;
    e.reversed = f;
    n.MovieClip.apply(this, [e]);
    this.frame_0 = function () {
      this.stop();
    };
    this.timeline.addTween(n.Tween.get(this).call(this.frame_0).wait(2));
    this.instance = new i.markBlu();
    this.instance.setTransform(-6, -17);
    this.instance.cache(-2, -2, 16, 21);
    this.instance_1 = new i.markRed();
    this.instance_1.setTransform(-6, -17);
    this.instance_1.cache(-2, -2, 16, 21);
    this.timeline.addTween(
      n.Tween.get({})
        .to({ state: [{ t: this.instance }] })
        .to({ state: [{ t: this.instance_1 }] }, 1)
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(-6, -17, 12, 17);
  (i.marker = function (t, r, u, f) {
    u == null && (u = !0);
    f == null && (f = !1);
    var e = {};
    e.mode = t;
    e.startPosition = r;
    e.labels = { s1: 1 };
    e.loop = u;
    e.reversed = f;
    n.MovieClip.apply(this, [e]);
    this.frame_0 = function () {
      this.stop();
    };
    this.frame_17 = function () {
      this.gotoAndPlay('s1');
    };
    this.timeline.addTween(
      n.Tween.get(this).call(this.frame_0).wait(17).call(this.frame_17).wait(1)
    );
    this.btn = new i.hitBtn();
    this.btn.name = 'btn';
    this.btn.setTransform(-14, -22);
    this.btn.cache(-2, -2, 32, 32);
    this.timeline.addTween(n.Tween.get(this.btn).wait(18));
    this.bg = new i.markerBg();
    this.bg.name = 'bg';
    this.timeline.addTween(
      n.Tween.get(this.bg)
        .wait(1)
        .to({ y: -3 }, 8, n.Ease.get(0.5))
        .to({ y: 0 }, 8, n.Ease.get(-0.5))
        .wait(1)
    );
    this._renderFirstFrame();
  }).prototype = r = new n.MovieClip();
  r.nominalBounds = new n.Rectangle(-14, -22, 28, 28);
  (i.map_1 = function (t, r, u, f) {
    u == null && (u = !0);
    f == null && (f = !1);
    var e = {};
    e.mode = t;
    e.startPosition = r;
    e.labels = {};
    e.loop = u;
    e.reversed = f;
    n.MovieClip.apply(this, [e]);
    this.m12 = new i.marker();
    this.m12.name = 'm12';
    this.m12.setTransform(139, 18);
    this.m2 = new i.marker();
    this.m2.name = 'm2';
    this.m2.setTransform(65, 278);
    this.m1 = new i.marker();
    this.m1.name = 'm1';
    this.m1.setTransform(287, 362);
    this.m11 = new i.marker();
    this.m11.name = 'm11';
    this.m11.setTransform(64, 24);
    this.m4 = new i.marker();
    this.m4.name = 'm4';
    this.m4.setTransform(625, 172);
    this.m3 = new i.marker();
    this.m3.name = 'm3';
    this.m3.setTransform(485, 213);
    this.m5 = new i.marker();
    this.m5.name = 'm5';
    this.m5.setTransform(524, 313);
    this.m6 = new i.marker();
    this.m6.name = 'm6';
    this.m6.setTransform(385, 281);
    this.m8 = new i.marker();
    this.m8.name = 'm8';
    this.m8.setTransform(65, 301);
    this.m7 = new i.marker();
    this.m7.name = 'm7';
    this.m7.setTransform(28, 213);
    this.m9 = new i.marker();
    this.m9.name = 'm9';
    this.m9.setTransform(48, 254);
    this.timeline.addTween(
      n.Tween.get({})
        .to({
          state: [
            { t: this.m9 },
            { t: this.m7 },
            { t: this.m8 },
            { t: this.m6 },
            { t: this.m5 },
            { t: this.m3 },
            { t: this.m4 },
            { t: this.m11 },
            { t: this.m1 },
            { t: this.m2 },
            { t: this.m12 },
          ],
        })
        .wait(1)
    );
    this.instance = new i.CachedBmp_55();
    this.instance.setTransform(676, 12, 0.5, 0.5);
    this.instance_1 = new i.CachedBmp_54();
    this.instance_1.setTransform(581, 26, 0.5, 0.5);
    this.instance_2 = new i.CachedBmp_53();
    this.instance_2.setTransform(422, 14, 0.5, 0.5);
    this.instance_3 = new i.CachedBmp_52();
    this.instance_3.setTransform(304, 19, 0.5, 0.5);
    this.instance_4 = new i.CachedBmp_51();
    this.instance_4.setTransform(222, 16, 0.5, 0.5);
    this.instance_5 = new i.CachedBmp_50();
    this.instance_5.setTransform(147, 12, 0.5, 0.5);
    this.instance_6 = new i.CachedBmp_49();
    this.instance_6.setTransform(80, 4, 0.5, 0.5);
    this.instance_7 = new i.CachedBmp_48();
    this.instance_7.setTransform(224, 221, 0.5, 0.5);
    this.instance_8 = new i.CachedBmp_47();
    this.instance_8.setTransform(662, 66, 0.5, 0.5);
    this.instance_9 = new i.CachedBmp_46();
    this.instance_9.setTransform(646, 125, 0.5, 0.5);
    this.instance_10 = new i.CachedBmp_45();
    this.instance_10.setTransform(643, 109, 0.5, 0.5);
    this.instance_11 = new i.CachedBmp_44();
    this.instance_11.setTransform(628, 92, 0.5, 0.5);
    this.instance_12 = new i.CachedBmp_43();
    this.instance_12.setTransform(604, 126, 0.5, 0.5);
    this.instance_13 = new i.CachedBmp_42();
    this.instance_13.setTransform(580, 165, 0.5, 0.5);
    this.instance_14 = new i.CachedBmp_41();
    this.instance_14.setTransform(659, 141, 0.5, 0.5);
    this.instance_15 = new i.CachedBmp_40();
    this.instance_15.setTransform(640, 139, 0.5, 0.5);
    this.instance_16 = new i.CachedBmp_39();
    this.instance_16.setTransform(637, 178, 0.5, 0.5);
    this.instance_17 = new i.CachedBmp_38();
    this.instance_17.setTransform(622, 195, 0.5, 0.5);
    this.instance_18 = new i.CachedBmp_37();
    this.instance_18.setTransform(596, 190, 0.5, 0.5);
    this.instance_19 = new i.CachedBmp_36();
    this.instance_19.setTransform(581, 221, 0.5, 0.5);
    this.instance_20 = new i.CachedBmp_35();
    this.instance_20.setTransform(542, 215, 0.5, 0.5);
    this.instance_21 = new i.CachedBmp_34();
    this.instance_21.setTransform(514, 188, 0.5, 0.5);
    this.instance_22 = new i.CachedBmp_33();
    this.instance_22.setTransform(485, 140, 0.5, 0.5);
    this.instance_23 = new i.CachedBmp_32();
    this.instance_23.setTransform(422, 126, 0.5, 0.5);
    this.instance_24 = new i.CachedBmp_31();
    this.instance_24.setTransform(478, 210, 0.5, 0.5);
    this.instance_25 = new i.CachedBmp_30();
    this.instance_25.setTransform(437, 200, 0.5, 0.5);
    this.instance_26 = new i.CachedBmp_29();
    this.instance_26.setTransform(478, 268, 0.5, 0.5);
    this.instance_27 = new i.CachedBmp_28();
    this.instance_27.setTransform(502, 234, 0.5, 0.5);
    this.instance_28 = new i.CachedBmp_27();
    this.instance_28.setTransform(580, 258, 0.5, 0.5);
    this.instance_29 = new i.CachedBmp_26();
    this.instance_29.setTransform(562, 290, 0.5, 0.5);
    this.instance_30 = new i.CachedBmp_25();
    this.instance_30.setTransform(528, 318, 0.5, 0.5);
    this.instance_31 = new i.CachedBmp_24();
    this.instance_31.setTransform(570, 396, 0.5, 0.5);
    this.instance_32 = new i.CachedBmp_23();
    this.instance_32.setTransform(308, 352, 0.5, 0.5);
    this.instance_33 = new i.CachedBmp_22();
    this.instance_33.setTransform(208, 298, 0.5, 0.5);
    this.instance_34 = new i.CachedBmp_21();
    this.instance_34.setTransform(132, 286, 0.5, 0.5);
    this.instance_35 = new i.CachedBmp_20();
    this.instance_35.setTransform(146, 210, 0.5, 0.5);
    this.instance_36 = new i.CachedBmp_19();
    this.instance_36.setTransform(41, 213, 0.5, 0.5);
    this.instance_37 = new i.CachedBmp_18();
    this.instance_37.setTransform(80, 185, 0.5, 0.5);
    this.instance_38 = new i.CachedBmp_17();
    this.instance_38.setTransform(122, 122, 0.5, 0.5);
    this.instance_39 = new i.CachedBmp_16();
    this.instance_39.setTransform(52, 106, 0.5, 0.5);
    this.instance_40 = new i.CachedBmp_15();
    this.instance_40.setTransform(70, 48, 0.5, 0.5);
    this.instance_41 = new i.CachedBmp_14();
    this.instance_41.setTransform(204, 150, 0.5, 0.5);
    this.instance_42 = new i.CachedBmp_13();
    this.instance_42.setTransform(191, 81, 0.5, 0.5);
    this.instance_43 = new i.CachedBmp_12();
    this.instance_43.setTransform(298, 78, 0.5, 0.5);
    this.instance_44 = new i.CachedBmp_11();
    this.instance_44.setTransform(362, 103, 0.5, 0.5);
    this.instance_45 = new i.CachedBmp_10();
    this.instance_45.setTransform(298, 132, 0.5, 0.5);
    this.instance_46 = new i.CachedBmp_9();
    this.instance_46.setTransform(380, 172, 0.5, 0.5);
    this.instance_47 = new i.CachedBmp_8();
    this.instance_47.setTransform(308, 182, 0.5, 0.5);
    this.instance_48 = new i.CachedBmp_7();
    this.instance_48.setTransform(320, 232, 0.5, 0.5);
    this.instance_49 = new i.CachedBmp_6();
    this.instance_49.setTransform(394, 231, 0.5, 0.5);
    this.instance_50 = new i.CachedBmp_5();
    this.instance_50.setTransform(340, 284, 0.5, 0.5);
    this.instance_51 = new i.CachedBmp_4();
    this.instance_51.setTransform(395, 294, 0.5, 0.5);
    this.instance_52 = new i.CachedBmp_3();
    this.instance_52.setTransform(400, 348, 0.5, 0.5);
    this.instance_53 = new i.CachedBmp_2();
    this.instance_53.setTransform(480, 319, 0.5, 0.5);
    this.instance_54 = new i.CachedBmp_1();
    this.instance_54.setTransform(437, 325, 0.5, 0.5);
    this.timeline.addTween(
      n.Tween.get({})
        .to({
          state: [
            { t: this.instance_54 },
            { t: this.instance_53 },
            { t: this.instance_52 },
            { t: this.instance_51 },
            { t: this.instance_50 },
            { t: this.instance_49 },
            { t: this.instance_48 },
            { t: this.instance_47 },
            { t: this.instance_46 },
            { t: this.instance_45 },
            { t: this.instance_44 },
            { t: this.instance_43 },
            { t: this.instance_42 },
            { t: this.instance_41 },
            { t: this.instance_40 },
            { t: this.instance_39 },
            { t: this.instance_38 },
            { t: this.instance_37 },
            { t: this.instance_36 },
            { t: this.instance_35 },
            { t: this.instance_34 },
            { t: this.instance_33 },
            { t: this.instance_32 },
            { t: this.instance_31 },
            { t: this.instance_30 },
            { t: this.instance_29 },
            { t: this.instance_28 },
            { t: this.instance_27 },
            { t: this.instance_26 },
            { t: this.instance_25 },
            { t: this.instance_24 },
            { t: this.instance_23 },
            { t: this.instance_22 },
            { t: this.instance_21 },
            { t: this.instance_20 },
            { t: this.instance_19 },
            { t: this.instance_18 },
            { t: this.instance_17 },
            { t: this.instance_16 },
            { t: this.instance_15 },
            { t: this.instance_14 },
            { t: this.instance_13 },
            { t: this.instance_12 },
            { t: this.instance_11 },
            { t: this.instance_10 },
            { t: this.instance_9 },
            { t: this.instance_8 },
            { t: this.instance_7 },
            { t: this.instance_6 },
            { t: this.instance_5 },
            { t: this.instance_4 },
            { t: this.instance_3 },
            { t: this.instance_2 },
            { t: this.instance_1 },
            { t: this.instance },
          ],
        })
        .wait(1)
    );
    this.instance_55 = new i.CachedBmp_56();
    this.instance_55.setTransform(0.5, -4.9, 0.5, 0.5);
    this.timeline.addTween(n.Tween.get(this.instance_55).wait(1));
    this.p8 = new i.area8();
    this.p8.name = 'p8';
    this.p8.setTransform(118.4, -4.3);
    this.p7 = new i.area7();
    this.p7.name = 'p7';
    this.p7.setTransform(42.45, -4.4);
    this.p2 = new i.area6();
    this.p2.name = 'p2';
    this.p2.setTransform(1, 132.8);
    this.p5 = new i.area5();
    this.p5.name = 'p5';
    this.p5.setTransform(500.7, 285.85);
    this.p4 = new i.area4();
    this.p4.name = 'p4';
    this.p4.setTransform(619.65, 158.85);
    this.p3 = new i.area3();
    this.p3.name = 'p3';
    this.p3.setTransform(463.1, 174.7);
    this.p6 = new i.area2();
    this.p6.name = 'p6';
    this.p6.setTransform(376.8, 270.85);
    this.p1 = new i.area1();
    this.p1.name = 'p1';
    this.p1.setTransform(206.95, 271.55);
    this.timeline.addTween(
      n.Tween.get({})
        .to({
          state: [
            { t: this.p1 },
            { t: this.p6 },
            { t: this.p3 },
            { t: this.p4 },
            { t: this.p5 },
            { t: this.p2 },
            { t: this.p7 },
            { t: this.p8 },
          ],
        })
        .wait(1)
    );
    this.instance_56 = new i.CachedBmp_57();
    this.instance_56.setTransform(7.95, -4.9, 0.5, 0.5);
    this.timeline.addTween(n.Tween.get(this.instance_56).wait(1));
    this._renderFirstFrame();
  }).prototype = f(i.map_1, new n.Rectangle(0.5, -4.9, 708, 460), null);
  (i.map = function (t, r, u, f) {
    u == null && (u = !0);
    f == null && (f = !1);
    var e = {};
    e.mode = t;
    e.startPosition = r;
    e.labels = {};
    e.loop = u;
    e.reversed = f;
    n.MovieClip.apply(this, [e]);
    this.map = new i.map_1();
    this.map.name = 'map';
    this.timeline.addTween(n.Tween.get(this.map).wait(1));
    this._renderFirstFrame();
  }).prototype = r = new i.AnMovieClip();
  r.nominalBounds = new n.Rectangle(350.5, 225.1, 358, 230.00000000000003);
  i.properties = {
    id: '04FF31BB87182D4FA7F2FFF5866BC73F',
    width: 700,
    height: 460,
    fps: 30,
    color: '#FFFFFF',
    opacity: 1,
    manifest: [
      { src: 'images/canvas_map.png?1637822652604', id: 'map_atlas_1' },
    ],
    preloads: [],
  };
  (i.Stage = function (n) {
    createjs.Stage.call(this, n);
  }).prototype = r = new createjs.Stage();
  r.setAutoPlay = function (n) {
    this.tickEnabled = n;
  };
  r.play = function () {
    this.tickEnabled = !0;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  r.stop = function (n) {
    n && this.seek(n);
    this.tickEnabled = !1;
  };
  r.seek = function (n) {
    this.tickEnabled = !0;
    this.getChildAt(0).gotoAndStop((i.properties.fps * n) / 1e3);
  };
  r.getDuration = function () {
    return (this.getChildAt(0).totalFrames / i.properties.fps) * 1e3;
  };
  r.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / i.properties.fps) * 1e3;
  };
  t.bootcompsLoaded = t.bootcompsLoaded || [];
  t.bootstrapListeners || (t.bootstrapListeners = []);
  t.bootstrapCallback = function (n) {
    if ((t.bootstrapListeners.push(n), t.bootcompsLoaded.length > 0))
      for (var i = 0; i < t.bootcompsLoaded.length; ++i)
        n(t.bootcompsLoaded[i]);
  };
  t.compositions = t.compositions || {};
  t.compositions['04FF31BB87182D4FA7F2FFF5866BC73F'] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return i;
    },
    getSpriteSheet: function () {
      return u;
    },
    getImages: function () {
      return e;
    },
  };
  t.compositionLoaded = function (n) {
    t.bootcompsLoaded.push(n);
    for (var i = 0; i < t.bootstrapListeners.length; i++)
      t.bootstrapListeners[i](n);
  };
  t.getComposition = function (n) {
    return t.compositions[n];
  };
  t.makeResponsive = function (n, t, r, u, f) {
    function h() {
      var c = i.properties.width,
        l = i.properties.height,
        a = window.innerWidth,
        v = window.innerHeight,
        y = window.devicePixelRatio || 1,
        p = a / c,
        w = v / l,
        h = 1;
      n &&
        ((t == 'width' && e == a) || (t == 'height' && o == v)
          ? (h = s)
          : r
          ? u == 1
            ? (h = Math.min(p, w))
            : u == 2 && (h = Math.max(p, w))
          : (a < c || v < l) && (h = Math.min(p, w)));
      f[0].width = c * y * h;
      f[0].height = l * y * h;
      f.forEach(function (n) {
        n.style.width = c * h + 'px';
        n.style.height = l * h + 'px';
      });
      stage.scaleX = y * h;
      stage.scaleY = y * h;
      e = a;
      o = v;
      s = h;
      stage.tickOnUpdate = !1;
      stage.update();
      stage.tickOnUpdate = !0;
    }
    var e,
      o,
      s = 1;
    window.addEventListener('resize', h);
    h();
  };
  t.handleSoundStreamOnTick = function (n) {
    if (!n.paused) {
      var t = stage.getChildAt(0);
      (!t.paused || t.ignorePause) && t.syncStreamSounds();
    }
  };
  t.handleFilterCache = function (n) {
    var i, r, t;
    if (!n.paused && ((i = n.target), i && i.filterCacheList))
      for (r = 0; r < i.filterCacheList.length; r++)
        (t = i.filterCacheList[r]),
          t.startFrame <= i.currentFrame &&
            i.currentFrame <= t.endFrame &&
            t.instance.cache(t.x, t.y, t.w, t.h);
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;

var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation,
  map,
  marker,
  selMarker;
var divEmt1, divEmt2, sNum;

var markerItemArr = [
  'm1',
  'm2',
  'm3',
  'm4',
  'm5',
  'm6',
  'm7',
  'm8',
  'm9',
  'm11',
  'm12',
];
var mapAreaArr = [
  'p1',
  'p2',
  'p3',
  'p4',
  'p5',
  'p6',
  'p2',
  'p2',
  'p2',
  'p7',
  'p8',
];

/*function init()
{
	loadCanvasMap();
}*/

function loadCanvasMap() {
  canvas = document.getElementById('canvas');
  anim_container = document.getElementById('animation_container');
  dom_overlay_container = document.getElementById('dom_overlay_container');
  var comp = AdobeAn.getComposition('04FF31BB87182D4FA7F2FFF5866BC73F');
  var lib = comp.getLibrary();
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener('fileload', function (evt) {
    handleFileLoad(evt, comp);
  });
  loader.addEventListener('complete', function (evt) {
    handleComplete(evt, comp);
  });
  var lib = comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt, comp) {
  var images = comp.getImages();
  if (evt && evt.item.type == 'images') {
    images[evt.item.id] = evt.result;
  }
}

function handleComplete(evt, comp) {
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for (i = 0; i < ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet({
      images: [queue.getResult(ssMetadata[i].name)],
      frames: ssMetadata[i].frames,
    });
  }
  exportRoot = new lib.map();
  stage = new lib.Stage(canvas);
  createjs.Touch.enable(stage);
  stage.enableMouseOver();
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener('tick', stage);
  };
  AdobeAn.makeResponsive(true, 'both', false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
  updateMarkers();
}

function updateMarkers() {
  map = exportRoot.map;
  var markLen = markerItemArr.length,
    pnt;
  for (var i = 0; i < markLen; i++) {
    pnt = map[markerItemArr[i]];
    pnt.Id = i + 1;
    pnt.hitArea = pnt.btn;
    pnt.alpha = 1;
    pnt.cursor = 'pointer';
    pnt.addEventListener('click', function (e) {
      activateMarker(e.currentTarget.Id);
    });
    pnt.place = map[mapAreaArr[i]];
    pnt.bgBounds = pnt.place.nominalBounds;
    pnt.place.cache(
      pnt.bgBounds.x,
      pnt.bgBounds.y,
      pnt.bgBounds.width,
      pnt.bgBounds.height
    );
  }
  activateMarker(1, true);
}

function activateMarker(n, b) {
  marker = map[markerItemArr[n - 1]];
  if (selMarker) {
    selMarker.gotoAndStop(0);
    selMarker.bg.gotoAndStop(0);
    if (selMarker.place) selMarker.place.gotoAndStop(0);
    updateArea(selMarker);
    if (!b) {
      if (n == 2) n = 6;
      else if (n == 6) n = 2;
      $('#collapse' + n).collapse('toggle');
    }
    if (marker == selMarker) {
      selMarker = null;
      return;
    }
  }
  selMarker = marker;
  selMarker.gotoAndPlay('s1');
  selMarker.bg.gotoAndStop(1);
  if (selMarker.place) selMarker.place.gotoAndStop(1);
  updateArea(selMarker);
  if (!b) {
    if (n == 2) n = 6;
    else if (n == 6) n = 2;
    $('#collapse' + n).collapse('toggle');
  }
}

function updateArea(e) {
  e.place.uncache();
  e.place.cache(
    e.bgBounds.x,
    e.bgBounds.y,
    e.bgBounds.width,
    e.bgBounds.height
  );
}

$('.btn-link').click(function () {
  sNum = Number(this.id.split('slider')[1]);
  if (sNum == 2) sNum = 6;
  else if (sNum == 6) sNum = 2;
  activateMarker(sNum, true);
});

loadCanvasMap();
