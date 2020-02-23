const cheerio = require('cheerio');
const json2md = require("json2md");

let memoize = function (func) {
  let cache = {}
  return function (key) {
    if (!cache[key]) {
      cache[key] = func.apply(this, arguments)
    }
    return cache[key]
  }
}

// 查找书签
const findBookmark = memoize(function (html) {
  let children = {}
  const $ = cheerio.load(html)
  const isLink = $('dt').children().first().is('a')
  console.log(html)
  if (isLink) {
    const link = $('dt').children().first()
    const name = link.text()
    const url = link.attr('href')
    children = {name, url}
  } else {
    const childLinks = []
    const childHtml = $('dl>dt')
    const title = $('dt').children('h3').first().text()
    childHtml.each(function (i, elem) {
      const link = findBookmark($(this).html())
      childLinks.push(link)
    })
    children = {
      title,
      childLinks
    }
  }
  return children
})

const html = `<!DOCTYPE NETSCAPE-Bookmark-file-1>
<!-- This is an automatically generated file.
     It will be read and overwritten.
     DO NOT EDIT! -->
<META HTTP-EQUIV="Content-Type" CONTENT="text/html; charset=UTF-8">
<TITLE>Bookmarks</TITLE>
<H1>Bookmarks</H1>
<DL>
  <DT><H3 ADD_DATE="1561951041" LAST_MODIFIED="1581762198" PERSONAL_TOOLBAR_FOLDER="true">书签栏</H3>
    <DL>
      <DT><H3 ADD_DATE="1538836888" LAST_MODIFIED="1581212826">官方文档</H3>
        <DL>
          <DT><H3 ADD_DATE="1546052852" LAST_MODIFIED="1581004178">UI库1</H3>
            <DL>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
            </DL>
          </DT>
          <DT><H3 ADD_DATE="1546052852" LAST_MODIFIED="1581004178">UI库2</H3>
            <DL>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
              <DT><A HREF="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" ADD_DATE="1545728149"
                     ICON="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACT0lEQVQ4jYWTO2tUURSFv33OvXkNanwQExsNGiIpgthYCBoVwUoQmVEEf4SgiCAyhY9gwEoEIYokEGUmhURJYyAi2FlYBVQQC9FB1IyJY2buY2+bG8cRxdXutRbr7LUP/AkzsZGRYH5kJMAQA7H5YmD5vMdM/qQLRXMURXc8t/MuUXm934/WD57Y7tqDSbeuS9nQ4ayrrbYo7nTP2Fhl54v0grW59NWwXKdozjGEAGjMsHS7awNP0rMzG/VdWlu56T9X98r76p7oa+PGrVzu08DT+Jx1uavpIsMADCEBCxgAynLyHdXYXbl0amK6cKxz6tuuA1WXyvc1M5PPBksr/dFScFlSVOssA7CABasJRPEkiKU0vriOwMDJy/lZAAPXE3cEYUTDKSF1gmaCDJpiIogp0h4jAlrK5z1lEMrppkUkCRGXIhZlojI0DRLECaCIggcolEqa5cMMpzXEEmg1KK+2h5pipljkUMwEEcumEkVoGIN4zGIUgDw4StkSY9osQYEwSOhGxCiZJ28exKTGeksJrYFqRJglMEchqzGlgsNrhA+Fu733bRsFSSlLuu6i9XvjjtZxluItopIlEFmNuHac9WtzlCTkkEWA47U6Dn94BN39zFnCAB4sZk6g8G2UKkjraW4es5zvY1o8R4jBhFcrbyBZZjDra3apQoFJqTVPufkJBMQ4Y51bdvMA4aj+ABQ0grjK48W35Lkn9V/cVoPfTIrW1ruVKec5bgYkPPy4j5MMSON38T+w+iwL+sZtove2TYAFrbP/4m/Ev4t/AmgLGpE72gNRAAAAAElFTkSuQmCC">Ant
                Design of Vue - Ant Design Vue</A>
              </DT>
            </DL>
          </DT>
        </DL>
      </DT>
    </DL>
  </DT>
</DL>
        `
const $ = cheerio.load(html)
$('dl>dt').first().each(function (i, elem) {
  const data = JSON.stringify(findBookmark($(this).html()))
  // console.log(data)
})
