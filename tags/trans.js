module.exports = function (Twig) {

  Twig.exports.extendTag({
    // A unique system name for our tag.
    type: "trans",
    // The regular expression that matches our tag.
    regex: /^trans$/,
    // Which tags can follow this tag.
    next: [ 'endtrans' ],
    // Whether this is an open tag
    open: true,
    // This parse function acts like a passthrough.
    parse: function (token, context, chain) {
      output = Twig.parse.apply(this, [token.output, context]);

      return {
        chain: chain,
        output: output
      };
    }
  });

  Twig.exports.extendTag({
    type: "endtrans",
    regex: /^endtrans$/,
    next: [ ],
    open: false
  })
}