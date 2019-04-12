# trees&leaves

A storage structure designed for tree-structured data.

It can be used in scenarios such as catalogue, organizational structure, classification, etc.

[img](./trees&leaves.png)

## What databases are supported

This is a design pattern that does not restrict the database.

Index.ts gives a calculation method of building tree in design mode.

## How to Store Complex Node Relations

[img](./joint_trees&leaves.png)

It adds a new form. Is it well designed?

He avoided circular references, didn't he? In this way, the original structure can always be maintained as a simple tree.
