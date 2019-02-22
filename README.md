# Atom fixed-indentation-width package

Fix indentation width as you like in any indentation styles.


## Settings

Currently, you can set indentation width only in your stylesheet (~/.atom/styles.less).

```
.fixed-indentation-width(14.4px, 20px, 28px);

.fixed-indentation-width(@font-size, @line-height, @indent-width) {

	.generate-tab-width(10);
	.generate-tab-width(@n, @i: 1) when (@i =< @n) {
		atom-text-editor[data-tab-width="@{i}"] {
			.leading-whitespace,
			.trailing-whitespace:first-child {
				letter-spacing: @indent-width / @i;
			}
		}
		.generate-tab-width(@n, (@i + 1));
	}
	
	.leading-whitespace,
	.trailing-whitespace:first-child {
		display: inline-block;
		vertical-align: top;
		height: @line-height;
		font-size: 0;
	}
	
	.leading-whitespace.hard-tab {
		letter-spacing: @indent-width;
	}
}
```
