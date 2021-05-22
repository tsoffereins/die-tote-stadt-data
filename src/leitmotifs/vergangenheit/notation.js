(function () {
    const { score, measure, notes, beam, render } = new VF.Sheet({
        id: 'vergangenheit',
        measureWidths: [280, 240]
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/h/r', 'B4/q/r', 'B4/8/r'),
            beam(notes('B4/16', 'F#4/16', { stem: 'up' }))
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes('E4/q.'),
            beam(notes('F#4/16', 'C#4/16')),
            notes('G#4/h')
        ]);

    render();
})();
