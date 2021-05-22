(function () {
    const { score, measure, notes, render } = new VF.Sheet({
        id: 'bells-1',
        measureWidths: [440, 300],
        height: 160,
        offsetY: 30
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes(
                'B5/8/r',
                '(E5 B5 E6)/8',
                'B5/8/r',
                '(C#5 F#5 C#6)/8',
                'B5/8/r',
                '(E5 B5 E6)/8',
                'B5/8/r',
                '(C#5 F#5 C#6)/8',
                { stem: 'up' }
            )
        ], [
            notes(
                'E4/q/r',
                '(C#4 F#4 C#5)/8',
                'E4/8/r',
                '(E4 B4 E5)/8',
                'E4/8/r',
                '(C#4 F#4 C#5)/8',
                'E4/8/r',
                { stem: 'down' }
            )
        ])
        .addClef('treble')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            notes(
                '(E4 B4 E5)/8',
                'B4/8/r',
                'B4/q/r',
                'B4/h/r',
                { stem: 'down' }
            )
        ]);

    render();
})();
