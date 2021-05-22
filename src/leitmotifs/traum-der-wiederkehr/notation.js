(function () {
    const { score, measure, notes, tuplet, beam, curve, render } = new VF.Sheet({
        id: 'traum-der-wiederkehr',
        measureWidths: [400, 220, 240],
        offsetY: 20
    });

    score.set({ time: '2/2' });

    // Measure 1
    measure()
        .addNotes([
            tuplet(
                notes('E5/q'),
                beam(notes('Fb5/8', 'E5/8')),
                notes('Gb5/q[id="n1"]'),
                { num_notes: 3 }
            ),
            tuplet(
                notes('Gb5/q[id="n2"]'),
                beam(notes('A5/8', 'Bb5/8', 'Cb6/8', 'D6/8')),
                { num_notes: 3 }
            )
        ])
        .addClef('bass')
        .addTimeSignature('2/2');

    curve('n1', 'n2');

    // Measure 2
    measure()
        .addNotes([
            notes('E6/h[id="n3"]'),
            notes('E6/q[id="n4"]'),
            tuplet(beam(notes('D6/8', 'E6/8', 'D6/8')))
        ]);

    curve('n3', 'n4');

    // Measure 3
    measure()
        .addNotes([
            notes('Cb6/h[id="n5"]', 'Cb6/8[id="n6"]', 'B4/8/r', 'B4/q/r')
        ]);

    curve('n5', 'n6');

    render();
})();
