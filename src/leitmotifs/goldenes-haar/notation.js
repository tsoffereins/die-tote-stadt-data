(function () {
    const { score, measure, notes, render } = new VF.Sheet({
        id: 'goldenes-haar',
        measureWidths: [260, 160]
    });

    score.set({ time: '3/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B5/q', 'F#5/q'),
            beam(notes('C#5/8.', 'G#4/16', { stem: 'down' }))
        ])
        .addClef('treble')
        .addTimeSignature('3/4');

    // Measure 2
    measure()
        .addNotes([
            notes('D#5/h.')
        ]);

    render();
})();
