(function () {
    const { score, measure, notes, beam, curve, render } = new VF.Sheet({
        id: 'vergangenheit',
        measureWidths: [280, 260, 240]
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/h/r', 'B4/q/r', 'B4/8/r', 'F#4/8')
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('G#4/h/#1', 'G#4/q/#2', 'G#4/8/#3'),
            beam(notes('B4/16', 'F#4/16', { stem: 'up' }))
        ]);

    curve(1, 2);
    curve(2, 3);

    // Measure 3
    measure()
        .addNotes([
            notes('E4/q.'),
            beam(notes('F#4/16', 'C#4/16')),
            notes('G#4/h')
        ]);

    render();
})();
