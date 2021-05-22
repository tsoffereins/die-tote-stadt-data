(function () {
    const { score, measure, notes, curve, tuplet, render } = new VF.Sheet({
        id: 'meine-gattin',
        measureWidths: [200, 200, 100],
        height: 160,
        offsetY: 20
    });

    score.set({ time: '4/4' });

    // Measure 1
    measure()
        .addNotes([
            notes('B4/h/r', 'E5/h[id="n1"]')
        ])
        .addClef('bass')
        .addTimeSignature('4/4');

    // Measure 2
    measure()
        .addNotes([
            tuplet(notes('E5/h[id="n2"]', 'Fb5/h[id="n3"]', 'Gb5/h[id="n4"]', { stem: 'up' }))
        ], [
            notes('E5/w[id="n5"]')
        ]);

    curve('n1', 'n2', { invert: true });
    curve('n1', 'n5', { invert: true });

    // Measure 3
    measure()
        .addNotes([
             notes('(E5 F5 G5 B5 D6)/w')
        ]);

    curve('n3');
    curve('n4', { invert: true });
    curve('n5', { invert: true });

    render();
})();
