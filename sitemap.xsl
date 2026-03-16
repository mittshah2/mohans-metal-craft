<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
		<html xmlns="http://www.w3.org/1999/xhtml">
			<head>
				<title>XML Sitemap - Mohans Metal Craft</title>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<style type="text/css">
					body {
						font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
						color: #333;
						margin: 0;
						padding: 40px;
						background-color: #f8f9fa;
					}
					.container {
						max-width: 1000px;
						margin: 0 auto;
						background: #fff;
						padding: 40px;
						border-radius: 12px;
						box-shadow: 0 10px 30px rgba(0,0,0,0.05);
					}
					h1 {
						color: #1a1a1a;
						font-size: 28px;
						margin-bottom: 20px;
						border-bottom: 2px solid #e2e8f0;
						padding-bottom: 20px;
					}
					p.description {
						color: #666;
						margin-bottom: 30px;
						font-size: 16px;
					}
					table {
						width: 100%;
						border-collapse: collapse;
					}
					th {
						text-align: left;
						padding: 12px 15px;
						background-color: #f1f5f9;
						color: #475569;
						font-weight: 600;
						text-transform: uppercase;
						font-size: 12px;
						letter-spacing: 0.05em;
					}
					td {
						padding: 15px;
						border-bottom: 1px solid #edf2f7;
						font-size: 14px;
					}
					tr:hover td {
						background-color: #f8fafc;
					}
					a {
						color: #2563eb;
						text-decoration: none;
						font-weight: 500;
					}
					a:hover {
						text-decoration: underline;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>XML Sitemap</h1>
					<p class="description">
						This sitemap is for search engines like Google to index your site.
					</p>
					<table>
						<thead>
							<tr>
								<th width="75%">URL</th>
								<th>Priority</th>
								<th>Last Modified</th>
							</tr>
						</thead>
						<tbody>
							<xsl:for-each select="sitemap:urlset/sitemap:url">
								<tr>
									<td>
										<a href="{sitemap:loc}">
											<xsl:value-of select="sitemap:loc"/>
										</a>
									</td>
									<td>
										<xsl:value-of select="sitemap:priority"/>
									</td>
									<td>
										<xsl:value-of select="sitemap:lastmod"/>
									</td>
								</tr>
							</xsl:for-each>
						</tbody>
					</table>
				</div>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>
