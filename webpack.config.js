const path = require("path");

module.export = {
    entry: "./src/script.ts",
    module: {
      rules: [
          {
              test: /\.ts$/,
              use: "ts-loader",
              include: [path.resolve(__dirname, "src")]
          }
      ]
    },
    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "public")
    }


}