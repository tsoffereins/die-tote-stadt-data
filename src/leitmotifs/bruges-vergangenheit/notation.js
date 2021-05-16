(function () {
    const vf = new Vex.Flow.Factory({ renderer: { elementId: 'bruges-vergangenheit', width: 520, height: 120 } });

    const score = vf.EasyScore();
    score.set({ time: '4/4' });

    // Measure 1
    let system = vf.System({ x: 0, y: 0, width: 280, spaceBetweenStaves: 10 });
    system
        .addStave({
            voices: [
                score.voice([
                    score.notes('B4/h/r, B4/q/r, B4/8/r'),
                    score.beam(score.notes('B4/16, F#4/16', { stem: 'up' }))
                ].reduce((a, b) => a.concat(b)))
            ]
        })
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    system = vf.System({ x: 280, y: 0, width: 240, spaceBetweenStaves: 10 });
    system
        .addStave({
            voices: [
                score.voice([
                    score.notes('E4/q.'),
                    score.beam(score.notes('F#4/16, C#4/16')),
                    score.notes('G#4/h')
                ].reduce((a, b) => a.concat(b)))
            ]
        });

    vf.draw();
})();
